<template>
  <!--首页新品首发-->
  <div class="indexNewPub">
    <div class="newPubHead">
      <span class="newPubTitle">新品首发</span>
      <span class="newPubMore">
              <span>更多</span>
              <i class="iconfont icondibudaohanglan-"></i>
          </span>
    </div>
    <div class="newPubShops">
      <a class="newPubShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/2635f9af5b1547e2b299e4975267d6e9.png?imageView&quality=65&thumbnail=330x330" alt="">
        <span class="shopName">智能保温煮茶壶</span>
        <span class="shopPrice">￥19.8</span>
        <p class="shopActive">好货内部价</p>
      </a>
      <a class="newPubShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/2635f9af5b1547e2b299e4975267d6e9.png?imageView&quality=65&thumbnail=330x330" alt="">
        <span class="shopName">智能保温煮茶壶</span>
        <span class="shopPrice">￥19.8</span>
        <p class="shopActive">好货内部价</p>
      </a>
      <a class="newPubShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/2635f9af5b1547e2b299e4975267d6e9.png?imageView&quality=65&thumbnail=330x330" alt="">
        <span class="shopName">智能保温煮茶壶</span>
        <span class="shopPrice">￥19.8</span>
        <p class="shopActive">好货内部价</p>
      </a>
      <a class="newPubShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/2635f9af5b1547e2b299e4975267d6e9.png?imageView&quality=65&thumbnail=330x330" alt="">
        <span class="shopName">智能保温煮茶壶</span>
        <span class="shopPrice">￥19.8</span>
        <p class="shopActive">好货内部价</p>
      </a>
      <a class="newPubShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/2635f9af5b1547e2b299e4975267d6e9.png?imageView&quality=65&thumbnail=330x330" alt="">
        <span class="shopName">智能保温煮茶壶</span>
        <span class="shopPrice">￥19.8</span>
        <p class="shopActive">好货内部价</p>
      </a>
      <a class="newPubShop" href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/2635f9af5b1547e2b299e4975267d6e9.png?imageView&quality=65&thumbnail=330x330" alt="">
        <span class="shopName">智能保温煮茶壶壶壶壶</span>
        <span class="shopPrice">￥19.8</span>
        <p class="shopActive">好货内部价</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewPub"
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/mixin/mixin.styl"
  .indexNewPub
    width 100%
    height 834px
    background #fff
    margin-bottom 20px
    .newPubHead
      width 100%
      height 100px
      line-height 100px
      box-sizing border-box
      padding 0 30px
      .newPubTitle
        font-size 32px
      .newPubMore
        float right
        font-size 0
        span
          font-size 28px
          vertical-align middle
        i
          font-size 40px
          vertical-align middle
    .newPubShops
      width 100%
      padding-left 30px
      box-sizing border-box
      .newPubShop
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
