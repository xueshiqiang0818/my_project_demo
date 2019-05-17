<template>
  <div id="appContainer">
    <router-view/>
    <wy-footer/>
  </div>
</template>

<script>
  import Header from './components/header/Header'
  import Footer from './components/footer/Footer'
  export default {
    name: "App",
    components:{
      "wy-header":Header,
      "wy-footer":Footer
    }
  }
</script>

<style lang="stylus" scoped>
  #appContainer
    width 100%
    height 100%
</style>
