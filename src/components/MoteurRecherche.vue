<template>
    <div class="section section-moteur-recherche">
        <div class="container container-bloc-recherche">
          <div class="content">
            <form action="" class="form-recherche">
              <div class="input-bloc">
                <div id="input-editable" contenteditable="true" class="input-editable" placeholder="rechercher"></div>
                <div class="liste-autocomplete">
                  <ul class="tags-list-ul">
                    <li class="tags-list-li">
                      <span class="text-liste-autocomplete">kit</span>
                    </li>
                    <li class="tags-list-li">
                      <span class="text-liste-autocomplete">kitsurf</span>
                      <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                        </span>
                    </li>
                    <li class="tags-list-li">
                      <span class="text-liste-autocomplete">kitten</span>
                    </li>
                    <li class="tags-list-li">
                      <span class="text-liste-autocomplete">kitchen</span>
                    </li>
                    <li class="tags-list-li">
                                        <span class="text-liste-autocomplete">
                                            kitchenette
                                        </span>
                    </li>
                    <li class="tags-list-li">
                      <span class="text-liste-autocomplete">kitch</span>
                      <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                        </span>
                    </li>
                  </ul>
                </div>
                <div data-tag-zone="zone-tags" class="icon-tag-bloc">
                                <span class="other-icons icon-tags">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>
                                </span>
                </div>
                <div class="btn-search">
                  <button type="submit" class="btn btn-recherche">
                                    <span>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M53.5,91.3C71.6,94,90.2,85,98.8,67.8c10.7-21.4,2-47.5-19.4-58.2S31.9,7.6,21.2,29
	C12,47.4,17.1,69.3,32.4,81.9c2.5,2,6.5,8.7,3.5,14.6c-2,4.1-9.3,18.6-9.3,18.6"/>
<g>
	<line class="st0" x1="59.7" y1="33.3" x2="59.7" y2="64.4"/>
	<line class="st0" x1="75.2" y1="48.9" x2="44.1" y2="48.9"/>
</g>
</svg>

                                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div id="zone-tags" class="content content-tags">
            <div class="alphabet-bloc">
              <div class="alphabet-bloc-content">
                <div class="lettre"><a href="tags.html" class="lettre-span current-lettre">a</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">b</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">c</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">d</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">e</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">f</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">g</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">h</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">i</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">j</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">k</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">l</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">m</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">n</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">o</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">p</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">q</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">r</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">s</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">t</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">u</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">v</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">w</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">x</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">y</a></div>
                <div class="lettre"><a href="tags.html" class="lettre-span">z</a></div>
              </div>
            </div>
            <div class="mots-bloc">
              <span class="current-words">a</span>
              <div class="mots-content">
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="" class="mots-link">armes</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">asie</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anemone de mer</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anemone</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">art</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anemone de mer</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">artiste</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">armes</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anemone de mer</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">arts</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anemone de mer</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anime</a>
                </div>
                <div class="mots">
                                <span class="tag-icon">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                </span>
                  <a href="tags-items.html" class="mots-link">anemone de mer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--ici-->
      </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MoteurRecherche extends Vue {

}
</script>

<style scoped lang="scss">

</style>
