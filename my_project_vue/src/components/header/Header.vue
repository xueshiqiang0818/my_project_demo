<template>
  <div id="headerContainer">
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
    <div class="nav" v-show="$route.path==='/home'">
      <div class="navList">
        <ul>
          <li class="navActive">
            <span>推荐</span>
          </li>
          <li>
            <span>居家生活</span>
          </li>
          <li>
            <span>服饰鞋包</span>
          </li>
          <li>
            <span>美食酒水</span>
          </li>
          <li>
            <span>个护清洁</span>
          </li>
          <li>
            <span>母婴亲子</span>
          </li>
          <li>
            <span>运动旅行</span>
          </li>
          <li>
            <span>数码家电</span>
          </li>
          <li>
            <span>全球特色</span>
          </li>
        </ul>
      </div>
      <div class="arrow" @click="isShuowMaskNav=!isShuowMaskNav">
        <i class="iconfont iconjiantoushang"></i>
      </div>
      <div class="maskNav" v-show="isShuowMaskNav">
        <h5>全部频道</h5>
        <ul class="maskList">
          <li class="maskActive">
            <span>推荐</span>
          </li>
          <li>
            <span>居家生活</span>
          </li>
          <li>
            <span>服饰鞋包</span>
          </li>
          <li>
            <span>美食酒水</span>
          </li>
          <li>
            <span>个护清洁</span>
          </li>
          <li>
            <span>母婴亲子</span>
          </li>
          <li>
            <span>运动旅行</span>
          </li>
          <li>
            <span>数码家电</span>
          </li>
          <li>
            <span>全球特色</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return {
        isShuowMaskNav:false,

      }
    }
  }
</script>

<style lang="stylus" scoped>
  #headerContainer
    position fixed
    top 0
    left 0
    width 100%
    background #fff
    z-index 5
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
    .nav
      position relative
      .navList
        position relative
        height 60px
        margin-left 30px
        margin-right 100px
        overflow hidden
        ul
          position absolute
          white-space nowrap
          font-size 0
          li
            display inline-block
            box-sizing border-box
            height 60px
            line-height 60px
            font-size 30px
            padding 0 15px
            margin-right 20px
            vertical-align middle
            &.navActive
              border-bottom 5px solid #b4282d
              color #b4282d
      .arrow
        position absolute
        top 0
        right 0
        width 100px
        height 60px
        text-align center
        z-index 101
        i
          position absolute
          top 15px
          right 35px
          font-size 30px
          color #B4B4B4
      .maskNav
        position absolute
        left 0
        top 0
        background #fff
        z-index 100
        h5
          color red
          font-size 28px
          font-weight 300
          padding 10px 0 10px 30px
        .maskList
          margin-top 20px
          li
            float left
            box-sizing border-box
            width 150px
            height 56px
            line-height 56px
            text-align center
            background #FAFAFA
            border 1px solid #E3E3E3
            border-radius 10px
            margin-left 30px
            margin-bottom 40px
            &.maskActive
              border 1px solid #b4282d
              span
                color #b4282d
            span
              color #000
              font-size 24px
              font-weight 100

</style>
