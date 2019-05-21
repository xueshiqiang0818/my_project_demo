<template>
  <!--品牌制造商直供-->
  <div class="indexBrandFor">
    <div class="brandForTitle">
      <span class="title">品牌制造商直供</span>
      <span class="brandForMore">
              <span>更多</span>
              <i class="iconfont icondibudaohanglan-"></i>
            </span>
    </div>
    <ul class="brandForList">
      <li>
        <span class="title">海外制造商</span>
        <div class="price">
          <span>9.9元起</span>
          <i class="stateIcon">上新</i>
        </div>
      </li>
      <li>
        <span class="title">海外制造商</span>
        <div class="price">
          <span>9.9元起</span>
          <i class="stateIcon">上新</i>
        </div>
      </li>
      <li>
        <span class="title">海外制造商</span>
        <div class="price">
          <span>9.9元起</span>
          <i class="stateIcon">上新</i>
        </div>
      </li>
      <li>
        <span class="title">海外制造商</span>
        <div class="price">
          <span>9.9元起</span>
          <i class="stateIcon">上新</i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "BrandFor"
  }
</script>

<style lang="stylus" scoped>
  .indexBrandFor
    width 100%
    height 654px
    background #fff
    margin-bottom 20px
    .brandForTitle
      width 100%
      height 100px
      line-height 100px
      padding 0 30px
      box-sizing border-box
      .title
        font-size 32px
      .brandForMore
        float right
        font-size 0
        margin-right -13px
        span
          font-size 28px
          vertical-align middle
        .iconfont
          font-size 40px
          vertical-align middle
    .brandForList
      width 100%
      height 554px
      padding-left 30px
      li
        float left
        margin 0 4px 4px 0
        width 343px
        height 260px
        background-image url("http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1")
        background-repeat no-repeat
        background-size 100% 100%
        .title
          display block
          font-size 30px
          text-align center
          padding-top 20px
          margin-bottom 5px
        .price
          text-align center
          font-size 0
          span
            font-size 24px
          .stateIcon
            display inline-block
            width 64px
            height 32px
            font-size 24px
            background #CBB693
            font-style normal
            border-radius 5px
            margin-left 5px
</style>
