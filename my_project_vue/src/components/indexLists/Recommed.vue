<template>
  <!--人气推荐-->
  <div class="indexRecommed" >
    <div class="recommendHead">
      <span class="recommendTitle">人气推荐</span>
      <span class="recommendMore">
              <span>更多</span>
              <i class="iconfont icondibudaohanglan-"></i>
            </span>
    </div>
    <div class="firstRecommendShops">
      <img src="https://yanxuan.nosdn.127.net/042fa68e8179420a9203436256b14a01.png?imageView&quality=65&thumbnail=280x280" alt="">
      <div class="shopText">
        <p class="shopActive">5月优惠</p>
        <p class="shopName">九制黑芝麻丸</p>
        <p class="shopDetail ellipsis">传统工艺，芝麻香浓郁，颗颗精髓</p>
        <span class="shopPrice">￥65</span>
      </div>
    </div>
    <div class="recommendShops">
      <a class="recommendShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/2635f9af5b1547e2b299e4975267d6e9.png?imageView&quality=65&thumbnail=330x330" alt="">
        <span class="shopName">多功能人体工学转椅</span>
        <span class="shopPrice">￥1389</span>
        <p class="shopActive">每满499减80券</p>
      </a>
      <a class="recommendShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/2635f9af5b1547e2b299e4975267d6e9.png?imageView&quality=65&thumbnail=330x330" alt="">
        <span class="shopName">多功能人体工学转椅</span>
        <span class="shopPrice">￥1389</span>
        <p class="shopActive">每满499减80券</p>
      </a>
      <a class="recommendShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/2635f9af5b1547e2b299e4975267d6e9.png?imageView&quality=65&thumbnail=330x330" alt="">
        <span class="shopName">多功能人体工学转椅</span>
        <span class="shopPrice">￥1389</span>
        <p class="shopActive">每满499减80券</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommed"
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/mixin/mixin.styl'
  .indexRecommed
    width 100%
    height 784px
    background #fff
    margin-bottom 20px
    .recommendHead
      width 100%
      height 100px
      line-height 100px
      box-sizing border-box
      padding 0 30px
      .recommendTitle
        font-size 32px
      .recommendMore
        float right
        font-size 0
        span
          font-size 28px
          vertical-align middle
        i
          font-size 40px
          vertical-align middle
    .firstRecommendShops
      width 92%
      height 280px
      background #FEF0DF
      font-size 0
      margin 0 30px 20px
      img
        float left
        width 280px
        height 280px
        margin-right 30px
      .shopText
        display inline-block
        width 350px
        height 160px
        padding-top 60px
        .shopActive
          font-size 24px
          color #BF494D
          margin-bottom 10px
        .shopName
          font-size 32px
          margin-bottom 5px
        .shopDetail
          font-size 24px
          margin-bottom 10px
        .shopPrice
          font-size 28px
          color #BF494D
    .recommendShops
      width 100%
      padding-left 30px
      box-sizing border-box
      .recommendShop
        float left
        width 216px
        margin-right 20px
        img
          width 100%
          background $bgc-img
          margin-bottom 10px
        .shopName
          font-size 28px
        .shopPrice
          display inline-block
          font-size 28px
          color #BA393D
        .shopActive
          font-size 28px
          color #BA393D
</style>
