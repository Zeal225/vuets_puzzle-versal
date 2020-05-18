/**
 * Created by Ablo on 12/01/2018.
 */
const Obj = {
    init : function () {
        // this.topPageNavAndSearchZone();
        this.listeDeroulanteFormulaireRecherche();
        this.toggleHd();
        this.addWordAutocomplete();
        this.showContent();
        this.giveHdNote();
        this.showTagForm();
        this.navNavigation();
        this.showModal();
        this.activeUploadBtn();
        this.ombrageSearchZone();
        this.positionnementModalElmNav();
        this.alphabetSize();
        this.blocItemImageRatio();
        this.showModalPuzzle();
    },
    topPageNavAndSearchZone : function () {
        var elmt = $('.container-bloc-recherche'),
            menuSection = $('.section-head'),
            menuItem = $('.section-head .menu-item'),
            moteurRechercheTop = $('.section-moteur-recherche').position().top,
            sectionCategories = $('.js-add-padding'),
            sectionCategoriesPadTop = parseFloat(sectionCategories.css('padding-top')),
            moteurRechercheHauteur = elmt.innerHeight();
        console.log(moteurRechercheHauteur);
        $(window).on('scroll', function () {
            var scrollTopSize = window.scrollY;
            if (scrollTopSize > moteurRechercheTop+moteurRechercheHauteur){
                menuSection.addClass('js-fixed');
                menuItem.eq(0).css('display','inline-block');
                sectionCategories.css('padding-top',moteurRechercheHauteur+sectionCategoriesPadTop);
            }else {
                menuSection.removeClass('js-fixed');
                menuItem.eq(0).css('display','none');
                sectionCategories.css('padding-top',sectionCategoriesPadTop);
            }
        })
    },

    listeDeroulanteFormulaireRecherche : function () {
        var currentElm = $('.current-element'), iconeDirection = null;
        currentElm.on('click', function () {
            var $thisParent = $(this).closest('.js-slide-liste'); iconeDirection = $(this).find('.icon-down');
            // $(this).closest('.container-bloc-recherche').removeClass('shadow');
            $thisParent.find('.resolution-ul, .format-ul').slideToggle();
            iconeDirection.toggleClass('rotate-icone');
            $(this).find('.current-element-text').toggleClass('opacity');
        });
        var listeElm = $('.format-element');
        listeElm.on('click', function () {
            var $this = $(this), thisText = $this.text().trim(),
                thisInsertZone = $this.closest('.js-slide-liste').find('.current-element-text');
            thisInsertZone.text(thisText);
            thisInsertZone.addClass('mots-rose').removeClass('opacity');
            $this.closest('.resolution-ul, .format-ul').css('display','none');
            iconeDirection.removeClass('rotate-icone');
        })
    },
    toggleHd : function () {
        var elmt = $('.hd-bloc');
        elmt.on('click', function () {
           var $this = $(this),
               thisLegend = $this.find('.hd-legend');
           $this.toggleClass('select-hd');
           $this.find('.select').toggleClass('select-hd');
           $this.find('.on-off-btn').toggleClass('on-off-btn-hd');
           thisLegend.toggleClass('mots-rose');
        })
    },
    addWordAutocomplete : function () {
        var inputEditable = $('.input-editable'),
            autocompleteBloc = $('.liste-autocomplete'),
            autocompleteElement = $('.tags-list-li'),
            tagListElm = $('.mots');
        inputEditable.on('keyup', function () {
            var $this = $(this), thisVal = $this.text().trim();
            // inputEditable.find('br').remove().append('&nbsp');
            if (thisVal === ''){
                autocompleteBloc.css('display','none');
            }else {
                autocompleteBloc.css('display','block');
            }
        });
        autocompleteElement.on('click', function () {
            var $this = $(this),
                thisTextHtml = $this.find('.text-liste-autocomplete')[0].innerHTML;
                if ($this.find('.tag-icon').length !== 0){
                    var thisIconHtml = '<span contenteditable="false" class="tag-icon">'+$this.find('.tag-icon')[0].innerHTML+'</span>';
                }else {
                    thisIconHtml = '';
                }
            // inputEditable.find('br').remove();
            if (inputEditable.append(' '+'<span contenteditable="false" class="teste">'+thisIconHtml+thisTextHtml+'</span>, ')){
                autocompleteBloc.css('display','none');
            }
        });
        tagListElm.on('click', function (event) {
            event.preventDefault();
            var $this = $(this),
                thisTextHtml = $this.find('.mots-link')[0].innerHTML,
                thisIconHtml = '<span contenteditable="false" class="tag-icon">'+$this.find('.tag-icon')[0].innerHTML+'</span>';
            inputEditable.append(' '+'<span contenteditable="false" class="teste">'+thisIconHtml+thisTextHtml+'</span>, ');
        });
        var tagForm = $('.icon-tag-bloc');
        tagForm.on('click', function () {
            var $this = $(this), thisParent = $this.closest('.container-bloc-recherche'),
                thisCible = $this.attr('data-tag-zone');
            var tagZone = $('#'+thisCible+'');
            tagZone.slideToggle();
            thisParent.addClass('shadow');
            // thisParent.toggleClass('');
            $this.toggleClass('tag-is-show')
        })
    },
    showContent : function () {
        let elmToClick = $('.js-show-content');
        elmToClick.on('click', function () {
            let $this = $(this),
                thisCible = $this.attr('data-cible'),
                thisIconRow = $this.find('.icon-down'),
                thisCibleId = $('#'+thisCible+''),
                zoneTab = ['#resolution','#wallpaper','#download'];
            for (let i=0, c=zoneTab.length; i<c; i++){
               if (zoneTab[i] !== '#'+thisCible){
                   $(zoneTab[i]).slideUp(100);
               }
            }
            thisCibleId.slideToggle();
            thisIconRow.toggleClass('teste-ro');
        })
    },
    giveHdNote : function () {
        var etat = false, els = $('.js-note');
        els.on('mouseenter', function () {
            etat = true;
            if (etat === true) {
                var $this = $(this);
                $this.addClass('icon-note-connecter');
                $this.prevAll().addClass('icon-note-connecter');
                $this.nextAll().removeClass('icon-note-connecter');
            }
        });
        els.on('mouseleave', function () {
            if (etat === true) {
                var $this = $(this);
                $this.removeClass('icon-note-connecter');
                $this.prevAll().removeClass('icon-note-connecter');
                $this.nextAll().removeClass('icon-note-connecter');
            }
        });
        els.on('click',function () {
            etat = false;
            var $this = $(this);
            $this.addClass('black-color');
            $this.prevAll().addClass('icon-note-connecter');
            $this.nextAll().removeClass('icon-note-connecter');
        })
    },
    showTagForm : function () {
        var elm = $('.connecter .add-tags');
        elm.on('click', function () {
            var $this = $(this), thisCible = $this.attr('data-cible'), bloc = $('.'+thisCible+''),
                etat = bloc.css('display');
            if (etat === 'none'){
                bloc.css('display','inline-block')
            }else {
                bloc.css('display','none');
            }
        })
    },
    navNavigation : function () {
        var elmNav = $('.menu-item');
        if (elmNav){
            elmNav.on('click', function () {
                var $this = $(this), thisCible = $this.attr('data-cible'), blocCible = $('#'+thisCible+''),
                    etat = blocCible.css('display');
                if (etat === 'none'){
                    $('section, footer, .pub-content, .bandeau-carre, .section-moteur-recherche').css('opacity',0.2);
                    elmNav.removeClass('active');
                    $('.js-modale-nav').slideUp();
                    blocCible.slideDown();
                    $this.addClass('active');
                }else {
                    $('section, footer, .pub-content, .bandeau-carre, .section-moteur-recherche').css('opacity',1);
                    blocCible.slideUp();
                    $this.removeClass('active');
                }
            });
            hideBloc();
            function hideBloc() {
                $('body').on('click', function(event) {
                        if (!$(event.target).closest('.js-modale-nav, .menu-item').length) {
                            $('.js-modale-nav').fadeOut();
                            elmNav.removeClass('active');
                            $('section, footer, .pub-content, .bandeau-carre, .section-moteur-recherche').css('opacity',1);
                        }
                    }
                )
            }
        }
        let mobileNav = $('.mobile-li');
        mobileNav.on('click', function () {
            mobileNav.removeAttr('id');
            let $this = $(this), thisAttr = $this.attr('data-cible');
            let thisId = $('#'+thisAttr+'');
            if (thisId.css('display')==='none'){
                $('#mobile-nav, #mobile-search').slideUp();
                thisId.slideDown();
                $this.attr('id','active');
            }else {
                thisId.slideUp();
                $this.removeAttr('id');
            }
            $('body').on('click', function(event) {
                    if (!$(event.target).closest('.mobile-li, .mobile-menu-section, .mobile-search-section').length) {
                        $('#mobile-search, #mobile-nav').fadeOut();
                        mobileNav.removeAttr('id');
                    }
                }
            )
        })
    },
    showModal : function () {
        let elmClick = $('.js-item-bloc'),
            windowViewPort = $(window).width();
        elmClick.on('click', function () {
            if (!$(event.target).closest('.tag-name, .icon-tags').length) {
                let $this = $(this), thisCible = $this.attr('data-cible'), thisBloc = $('#'+thisCible+'');
                $('body').addClass('hidden');
                function showItemInformation() {
                    setTimeout(function () {
                        $('.modal-pub').css('display','none');
                        thisBloc.css('display','block');
                        //function qui calcul la taille du modal...
                        if (windowViewPort > 720){
                            resizeModal(thisBloc);
                        }
                        $(window).on('resize', function () {
                            windowViewPort = $(window).width();
                            if (windowViewPort > 720){
                                resizeModal(thisBloc);
                            }else {
                                initialSize(thisBloc);
                            }
                        })
                    }, 3000);
                }
                $('.modal-pub').css('display','block');
                showItemInformation();
            }
        });
        hideModal();
        function hideModal() {
            $('body').on('click', function(event) {
                    if (!$(event.target).closest('.js-item-bloc, .image-item, .item-image-bottom, .content-pub-video, form').length) {
                        $('.section-modal').css('display','none');
                        $('body').removeClass('hidden');
                    }
                }
            )
        }
        function resizeModal(param) {
            param.find('.image-item').css('height','auto');
            let windowHeight = $(window).height(),
                imageZoneHeight = param.find('.image-item'),
                imageBottomHeight = param.find('.js-resize-class').outerHeight(),
                longeurZoneImage = imageZoneHeight.outerWidth(),
                hauteurModal = param.find('.container').outerHeight(),
                ratio = 0.5;
            // windowHeight-imageBottomHeight
            // imageZoneHeight.css('height', longeurZoneImage*ratio);
            //fonction qui calcul et teste si y a scroll ou pas avant de choisir le sort du modal
            function resizeBloc(){
                let reste = hauteurModal-windowHeight;
                if (hauteurModal > windowHeight){
                    imageZoneHeight.css('height',(longeurZoneImage*ratio)-(reste/2));
                    console.log('hautMod='+hauteurModal+' hauWin='+windowHeight);
                }else {
                    imageZoneHeight.css('height', longeurZoneImage*ratio);
                }
            }
            resizeBloc();
        }
        function initialSize(param) {
            let imageZoneHeight = param.find('.image-item');
            imageZoneHeight.css('height','auto');
        }
    },
    activeUploadBtn : function () {
        var elm = $('#item-uploader .input-titre'),
            elmFormat = $('.format .format-element'),
            elmResolution = $('.resolution .format-element'),
            contentText = '',
            contentTextFormat = '',
            contentTextResolution = '';
        elm.on('keyup', function () {
            contentText = $(this).val().trim();
            verify();
        });
        elmFormat.on('click', function () {
            contentTextFormat = $(this).closest('.format').find('.current-element-text').text().trim();
            verify();
        });
        elmResolution.on('click', function () {
            contentTextResolution = $(this).closest('.resolution').find('.current-element-text').text().trim();
            verify();
        });
        function verify() {
            if (contentText !== '' && contentTextFormat !== '' && contentTextResolution !== ''){
                $('#item-uploader .btn-download-icon').addClass('valide');
            }else {
                $('#item-uploader .btn-download-icon').removeClass('valide');
            }
        }
    },
    ombrageSearchZone : function () {
        let elmInput = $('.container-bloc-recherche .form-recherche .input-editable'),
            elmFormat = $('.form-recherche .format .current-element'),
            elmResolution = $('.form-recherche .resolution .current-element'),
            elmHd = $('.form-recherche .hd-bloc'),
            iconTagBloc = $('.form-recherche .icon-tag-bloc'),
            blocRecherche = $('.container-bloc-recherche'),
            opacityZone = $('section, footer, .pub-content, .bandeau-carre');
        elmInput.on('focus', function(){
            addOpacity();
        });
        iconTagBloc.on('click', function () {
            addOpacity();
        });
        elmFormat.on('click', function () {
            addOpacity()
        });
        elmResolution.on('click', function () {
            addOpacity();
        });
        elmHd.on('click', function () {
            addOpacity();
        });
        $('body').on('click', function (event) {
            if (!$(event.target).closest('.container-bloc-recherche').length) {
                opacityZone.removeClass('opaciter');
                blocRecherche.removeClass('shadow');
                blocRecherche.css('background-color','transparent');
                $('#zone-tags').slideUp();
                $('.icon-tag-bloc').removeClass('tag-is-show');
            }
        });
        function addOpacity() {
            opacityZone.addClass('opaciter');
            blocRecherche.addClass('shadow');
            blocRecherche.css('background-color','rgba(255, 255, 255, 1)');
        }
        function removeOpacity() {
            let inputZonetext = $('.container-bloc-recherche .input-editable').text().trim();
            function verify() {
                if (inputZonetext ==='' && !elmFormat.hasClass('mots-rose') && !elmResolution.hasClass('mots-rose') && !elmHd.hasClass('select-hd')){
                    opacityZone.removeClass('opaciter');
                    blocRecherche.removeClass('shadow');
                }else {
                    return false
                }
            }
            verify();
        }
    },
    positionnementModalElmNav : function () {
        let headerHeight = $('header').outerHeight(),
            containerFormHeight = $('.container-bloc-recherche').outerHeight(),
            blocTop = (headerHeight-containerFormHeight);
        $('.js-modale-nav').css('top',blocTop);
    },
    alphabetSize : function () {
        function autoSize(){
            $('.lettre-span').css({
                'width' : '2rem',
                'heigth' : '2rem'
            })
        }
        let winTaille = $(window).width();
        if (winTaille >= 1024){
            zoneForm();
            outZoneForm();
        }else {
           autoSize()
        }
        $(window).on('resize', function () {
            let windTaille = $(window).width();
            if (windTaille >= 1024){
                zoneForm();
                outZoneForm();
            }else {
                autoSize()
            }
        });
        function zoneForm() {
            let contentAlphabet = $('.section-moteur-recherche .alphabet-bloc-content'),
                showTagIcon = $('.icon-tag-bloc');
            showTagIcon.on('click', function () {
                contentAlphabet.each(function () {
                    let $this = $(this);
                    let thisWidth = $this.width();
                    let tailleAlphabet = thisWidth/26;
                    contentAlphabet.find('.lettre .lettre-span').css('width',tailleAlphabet-10);
                });
            });
            $(window).on('resize', function () {
                let windTaille = $(window).width();
                if (windTaille >= 1024){
                    contentAlphabet.each(function () {
                        let $this = $(this);
                        let thisWidth = $this.width();
                        let tailleAlphabet = thisWidth/26;
                        contentAlphabet.find('.lettre .lettre-span').css('width',tailleAlphabet-10);
                    });
                }else {
                    autoSize()
                }
            })
        }
        function outZoneForm() {
            let alphabetSection = $('.section-tags .alphabet-bloc-content'),
                alphabetSectionTaille = $(alphabetSection).width(),
                lettre = $('.section-tags .alphabet-bloc-content .lettre-span'),
                lettreTaille = alphabetSectionTaille/26;
            lettre.css('width',lettreTaille-10);
        }
    },
    blocItemImageRatio : function () {
        let blocItem = $('.flex-resp-grid'),
            blocItemTaille = blocItem.width(),
            ratio = 0.8;
        // $('.flex-resp-grid .item').css('height', blocItemTaille*ratio);
    },
    showModalPuzzle : function () {
        let onBtn = $('.on-puzzle');
        let puzzleModule = $('#module-puzzle');
        onBtn.on('click', function () {
            puzzleModule.css('display','block');
        });
        $('.icon-close').on('click', function () {
            puzzleModule.css('display','none');
        });
        $('body').on('click', function(event){
            if (!$(event.target).closest('#module-puzzle').length) {
                $('.liste-autocomplete').css('display','none');
            }
        })
    }
};
Obj.init();



$('body').on('click', function(event) {
    if (!$(event.target).closest('.format .current-element').length) {
        $('.format-ul').slideUp();
        $('.format .icon-down').removeClass('rotate-icone');
        $('.format .current-element-text').removeClass('opacity');
    }
    if (!$(event.target).closest('.resolution .current-element').length) {
        $('.resolution-ul').slideUp();
        $('.resolution .icon-down').removeClass('rotate-icone');
        $('.resolution .current-element-text').removeClass('opacity');
    }
    // if (!$(event.target).closest('.icon-tag-bloc').length) {
    //     $('.content-tags').slideUp();
    // }
    if (!$(event.target).closest('.input-editable').length) {
        $('.liste-autocomplete').css('display','none');
    }
});
