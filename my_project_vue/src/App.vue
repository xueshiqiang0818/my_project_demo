<template>
  <div id="appContainer">
    <router-view/>
    <wy-footer/>
  </div>
</template>

<script>
  import Footer from './components/footer/Footer'
  export default {
    name: "App",
    components:{
      "wy-footer":Footer
    }
  }
</script>

<style lang="stylus" scoped>
  #appContainer
    width 100%
    height 100%
    margin-bottom 100px

</style>
