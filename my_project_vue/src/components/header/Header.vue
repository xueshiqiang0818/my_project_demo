<template>
  <div class="header">
    <a href=":javascript;" class="logo" v-show="$route.path==='/home'"></a>
    <div class="searchBtn" @click="$router.push('/search')">
      <span class="searchContent">
        <i class="iconfont iconsearch"></i>
        <span>搜索商品，共22195件商品</span>
      </span>
    </div>
    <button class="btn" v-show="$route.path==='/home'">登录</button>
  </div>
</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style lang="stylus" scoped>
  .header
    width 92%
    padding 15px 30px
    display flex
    align-items center
    .logo
      width 20%
      height 40px
      background-image url("images/wy.png")
      background-size 138px 40px
      background-repeat no-repeat
      margin-right 20px
    .searchBtn
      flex-grow 1
      display flex
      justify-content space-around
      padding 10px 36px
      box-sizing border-box
      background #ededed
      border-radius 10px
      .searchContent
        .iconsearch
          font-size 28px
          vertical-align middle
        span
          font-size 26px
          color #666
          vertical-align middle
    .btn
      display inline-block
      width 11%
      height 40px
      line-height 40px
      color #b4282d
      font-size 24px
      border 1px solid #b4282d
      border-radius 10px
      background #fff
      margin-left 16px

</style>
