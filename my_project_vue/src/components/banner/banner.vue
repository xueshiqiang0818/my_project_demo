<template>
  <div class="swiper-container banner" >
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/a45c727b09ded1e0554df1fac12b94b1.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/3f154127d71accf042254fe1d47b9a86.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/a7b08e3aed13787da15c58879963be01.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/fdf6de9f80d2200d8fe6d267dff99151.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/cfa93449e6deef735fc746c7aa39b96f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/a70aea278fc62d8967cf40d72e27c761.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/ac28c333645667553b74545c46ba5e7b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: "swiper",
    mounted(){
      new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    .swiper-wrapper
      .swiper-slide
        height 370px


</style>
