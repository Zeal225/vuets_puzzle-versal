<template>
  <div id="app">
        <Header></Header>
        <router-view/>
        <Navigation></Navigation>
  </div>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import Header from '@/components/Header'
  export default {
    components:{
        Navigation,
        Header
    }
  }
</script>

<style lang="scss">
</style>
