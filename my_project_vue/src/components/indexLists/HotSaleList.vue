<template>
  <!--类目热销榜-->
  <div class="indexHotSaleList">
    <div class="hotSaleTitle">
      <span>类目热销榜</span>
    </div>
    <div class="lineWrap1">
      <a class="hotSaleList1" href="javascript:;">
        <p class="name">热销榜</p>
        <div class="imgWrap">
          <img src="https://yanxuan.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </a>
      <a class="hotSaleList2" href="javascript:;">
        <p class="name">好评榜</p>
        <div class="imgWrap">
          <img src="https://yanxuan.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </a>
    </div>
    <div class="lineWrap2">
      <a class="hotSaleList" href="Javascript:;">
        <span class="name">居家生活榜</span>
        <div class="imgWrap">
          <img src="http://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </a>
      <a class="hotSaleList" href="Javascript:;">
        <span class="name">居家生活榜</span>
        <div class="imgWrap">
          <img src="http://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </a>
      <a class="hotSaleList" href="Javascript:;">
        <span class="name">居家生活榜</span>
        <div class="imgWrap">
          <img src="http://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </a>
      <a class="hotSaleList" href="Javascript:;">
        <span class="name">居家生活榜</span>
        <div class="imgWrap">
          <img src="http://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </a>
      <a class="hotSaleList" href="Javascript:;">
        <span class="name">居家生活榜</span>
        <div class="imgWrap">
          <img src="http://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </a>
      <a class="hotSaleList" href="Javascript:;">
        <span class="name">居家生活榜</span>
        <div class="imgWrap">
          <img src="http://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </a>
      <a class="hotSaleList" href="Javascript:;">
        <span class="name">居家生活榜</span>
        <div class="imgWrap">
          <img src="http://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </a>
      <a class="hotSaleList" href="Javascript:;">
        <span class="name">居家生活榜</span>
        <div class="imgWrap">
          <img src="http://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HotSaleList"
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/mixin/mixin.styl"
  .indexHotSaleList
    width 100%
    height 710px
    background #fff
    margin-bottom 20px
    .hotSaleTitle
      width 92%
      heihgt 100px
      line-height 100px
      margin-left 30px
      span
        font-size 32px
    .lineWrap1
      width 100%
      height 200px
      padding-left 30px
      box-sizing border-box
      margin-bottom 10px
      .hotSaleList1,.hotSaleList2
        float left
        width 340px
        height 200px
        position relative
        margin-right 10px
      .hotSaleList1
        background pink
      .hotSaleList2
        background skyblue
      .name
        position absolute
        top 60px
        left 30px
        font-size 30px
        &::after
          content ''
          display block
          width 48px
          height 4px
          margin-top 10px
          background #000
      .imgWrap
        float right
        width 200px
        height 200px
    .lineWrap2
      width 100%
      padding 0 20px 20px 30px
      box-sizing border-box
      clearfix()
      .hotSaleList
        float left
        width 165px
        height 180px
        margin 0 10px 10px 0
        background #f5f5f5
        .name
          display block
          font-size 26px
          text-align center
          margin-top 10px
        .imgWrap
          width 100%
          img
            width 120px
            height 120px
            margin 0 auto

</style>
