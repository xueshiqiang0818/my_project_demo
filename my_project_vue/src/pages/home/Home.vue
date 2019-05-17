<template>
  <div>
    <wy-header/>
    <wy-banner/>
  </div>
</template>

<script>

  import Banner from '../../components/banner/banner'
  export default {
    name: "Home",
    components:{
      'wy-banner':Banner
    }
  }
</script>

<style scoped>

</style>
