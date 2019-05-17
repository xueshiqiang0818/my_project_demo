<template>
  <div class="footer" v-show="$route.meta.showFooter">
    <router-link to="/home">
      <i class="iconfont iconhome"></i>
      <span>主页</span>
    </router-link>
    <router-link to="/category">
      <i class="iconfont iconfenlei"></i>
      <span>分类</span>
    </router-link>
    <router-link to="/goods">
      <i class="iconfont iconscan"></i>
      <span>识物</span>
    </router-link>
    <router-link to="/shopCart">
      <i class="iconfont icongouwuche"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/profile">
      <i class="iconfont iconcaidaniconwodehui"></i>
      <span>个人</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Footer",

  }
</script>

<style lang="stylus" scoped>
  @import '../../common/mixin/mixin.styl'
    .footer
      top-border-1px(#ededed)
      width 100%
      height 98px
      position fixed
      bottom 0
      display flex
      justify-content space-around
      a
        display flex
        flex-direction column
        align-items center
        font-size 28px
        color #666
        padding-top 10px
        &.activeFoot
          color #b4282d
          &>i
            color #b4282d
        i
          font-size 40px
          color #666


</style>
