<template>
  <div id="headerContainer">
    <div class="header">
      <a href=":javascript;" class="logo"></a>
      <div class="searchBtn">
        <i class="iconfont iconsearch"></i>
        <span>搜索商品，共22195件商品</span>
      </div>
      <button class="btn">登录</button>
    </div>
    <div class="nav">
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
      <div class="arrow">
        <i class="iconfont iconjiantoushang"></i>
      </div>
      <div class="maskNav" style="display: none;">
        <h5>全部频道</h5>
        <div class="list">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",

  }
</script>

<style lang="stylus" scoped>
  #headerContainer
    position relative
    .header
      padding 15px 30px
      display flex
      justify-content space-between
      align-items center
      .logo
        width 138px
        height 40px
        background-image url("images/wy.png")
        background-size 138px 40px
        background-repeat no-repeat
        margin-right 20px
      .searchBtn
        padding 10px 36px
        box-sizing border-box
        font-size 28px /*no*/
        color #666
        background #ededed
        border-radius 10px
        .iconsearch
          font-size 28px
      .btn
        width 74px
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
        i
          position absolute
          top 15px
          right 35px
          font-size 30px
          color #B4B4B4


</style>
