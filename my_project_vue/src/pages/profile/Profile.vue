<template>
  <div class="profileWrap">
    <div class="profileHeader">
      <a class="iconLeft" href="javascript:;">
        <i class="iconfont iconhome"></i>
      </a>
      <img class="profileLogo" src="./images/wy.png">
      <div class="iconRight">
        <i class="iconfont iconsousuo"></i>
        <i class="iconfont icongouwuche"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/mixin/mixin.styl'
  .profileWrap
    .profileHeader

      position relative
      width 100%
      height 87px
      line-height 87px
      background #FAFAFA
      .iconLeft
        float left
        height 100%
        padding-left 30px
        i
          font-size 50px
      .profileLogo
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        margin auto
      .iconRight
        float right
        height 100%
        i
          font-size 50px
          padding-right 25px

</style>
