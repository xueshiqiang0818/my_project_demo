<template>
  <!--首页限时购-->
  <div class="indexLimitTimeSale">
    <div class="limitTimeHead">
      <span class="limitTimeTitle">限时购</span>
      <div class="limitTime">
        00:00:00
      </div>
      <span class="limitTimeMore">
              <span>更多</span>
              <i class="iconfont icondibudaohanglan-"></i>
            </span>
    </div>
    <div class="limitTimeShops">
      <a class="limitTimeShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/355e0781cabbdfa084bf947aabceacf0.png?imageView&thumbnail=216x216&quality=75" alt="">
        <span>￥19.8</span>
        <del>￥19.8</del>
      </a>
      <a class="limitTimeShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/355e0781cabbdfa084bf947aabceacf0.png?imageView&thumbnail=216x216&quality=75" alt="">
        <span>￥19.8</span>
        <del>￥19.8</del>
      </a>
      <a class="limitTimeShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/355e0781cabbdfa084bf947aabceacf0.png?imageView&thumbnail=216x216&quality=75" alt="">
        <span>￥19.8</span>
        <del>￥19.8</del>
      </a>
      <a class="limitTimeShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/355e0781cabbdfa084bf947aabceacf0.png?imageView&thumbnail=216x216&quality=75" alt="">
        <span>￥19.8</span>
        <del>￥19.8</del>
      </a>
      <a class="limitTimeShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/355e0781cabbdfa084bf947aabceacf0.png?imageView&thumbnail=216x216&quality=75" alt="">
        <span>￥19.8</span>
        <del>￥19.8</del>
      </a>
      <a class="limitTimeShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/355e0781cabbdfa084bf947aabceacf0.png?imageView&thumbnail=216x216&quality=75" alt="">
        <span>￥19.8</span>
        <del>￥19.8</del>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LimitTimeSale"
  }
</script>

<style lang="stylus" scoped>
  .indexLimitTimeSale
    width 100%
    height 698px
    background #fff
    margin-bottom 20px
    .limitTimeHead
      width 100%
      height 100px
      line-height 100px
      padding 0 30px
      box-sizing border-box
      .limitTimeTitle
        float left
        font-size 32px
      .limitTime
        display inline-block
        margin-left 10px
      .limitTimeMore
        float right
        font-size 0
        span
          font-size 30px
          vertical-align middle
        i
          font-size 40px
          vertical-align middle
    .limitTimeShops
      width 100%
      height 598px
      padding-left 30px
      box-sizing border-box
      .limitTimeShop
        float left
        width 216px
        height 299px
        margin-right 20px
        img
          width 100%
          background $bgc-img
          margin-bottom 10px
        span
          padding 0 8px 0 15px
          font-size 28px
          color #BA393D
</style>
