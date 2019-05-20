<template>
  <div class="categoryWrap">
    <wy-header class="headerBorder"/>
    <div class="category">
      <div class="nameListWrap">
        <ul>
          <li class="on">
            <a href="Javascript:;">
              推荐专区
            </a>
          </li>
          <li>
            <a href="Javascript:;">
              初夏专区
            </a>
          </li>
          <li>
            <a href="Javascript:;">
              爆品专区
            </a>
          </li>
          <li>
            <a href="Javascript:;">
              新品专区
            </a>
          </li>
          <li>
            <a href="Javascript:;">
              居家生活
            </a>
          </li>
          <li>
            <a href="Javascript:;">
              服饰鞋帽
            </a>
          </li>
          <li>
            <a href="Javascript:;">
              美食酒水
            </a>
          </li>
          <li>
            <a href="Javascript:;">
              个护清洁
            </a>
          </li>
          <li>
            <a href="Javascript:;">
              母婴亲子
            </a>
          </li>
          <li>
            <a href="Javascript:;">
              运动旅游
            </a>
          </li>
          <li>
            <a href="Javascript:;">
              数码家电
            </a>
          </li>
          <li>
            <a href="Javascript:;">
              全球特色
            </a>
          </li>
        </ul>
      </div>
      <div class="imgListWrap">
        <div class="bigImg">
          <img src="http://yanxuan.nosdn.127.net/79c5e1e5a7f78a5616c4c3c4d1fd319f.jpg?imageView&thumbnail=0x196&quality=75" alt="">
        </div>
        <ul class="smallImgList">
          <li>
            <a href="javascript:;">
              <div class="smallImg">
                <img src="http://yanxuan.nosdn.127.net/1248603e628b089d25f7c563d16ace4a.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <span class="name">推荐专区十里桃花</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="smallImg">
                <img src="http://yanxuan.nosdn.127.net/1248603e628b089d25f7c563d16ace4a.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <span class="name">推荐专区</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="smallImg">
                <img src="http://yanxuan.nosdn.127.net/1248603e628b089d25f7c563d16ace4a.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <span class="name">推荐专区</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="smallImg">
                <img src="http://yanxuan.nosdn.127.net/1248603e628b089d25f7c563d16ace4a.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <span class="name">推荐专区</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="smallImg">
                <img src="http://yanxuan.nosdn.127.net/1248603e628b089d25f7c563d16ace4a.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <span class="name">推荐专区</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="smallImg">
                <img src="http://yanxuan.nosdn.127.net/1248603e628b089d25f7c563d16ace4a.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <span class="name">推荐专区</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="smallImg">
                <img src="http://yanxuan.nosdn.127.net/1248603e628b089d25f7c563d16ace4a.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <span class="name">推荐专区</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="smallImg">
                <img src="http://yanxuan.nosdn.127.net/1248603e628b089d25f7c563d16ace4a.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <span class="name">推荐专区</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="smallImg">
                <img src="http://yanxuan.nosdn.127.net/1248603e628b089d25f7c563d16ace4a.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <span class="name">推荐专区</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="smallImg">
                <img src="http://yanxuan.nosdn.127.net/1248603e628b089d25f7c563d16ace4a.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <span class="name">推荐专区</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="smallImg">
                <img src="http://yanxuan.nosdn.127.net/1248603e628b089d25f7c563d16ace4a.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <span class="name">推荐专区</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="smallImg">
                <img src="http://yanxuan.nosdn.127.net/1248603e628b089d25f7c563d16ace4a.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <span class="name">推荐专区</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Category"
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/mixin/mixin.styl"
  .categoryWrap
    .headerBorder
      bottom-border-1px(gray)
    .category
      .nameListWrap
        width 162px
        padding-top 118px
        float left
        ul
          width 162px
          li
            width 100%
            height 50px
            margin-top 40px
            &:first-child
              margin-top 0
            &.on
              border-left 3px solid #AB2B2B
              a
                color #AB2B2B
            a
              display block
              width 100%
              height 50px
              line-height 50px
              text-align center
              font-size 28px
      .imgListWrap
        float right
        width 588px
        height 100%
        padding-top 118px
        .bigImg
          width 100%
          height 192px
          margin 0 30px 30px
          img
            width 528px
            height 100%
        .smallImgList
          padding 0 30px
          li
            float left
            width 144px
            height 216px
            margin-right 32px
            a
              display block
              width 100%
              text-align center
              .smallImg
                width 100%
                heihgt 100%
                border-radius 50%
                img
                  width 100%
              .name
                padding 0 5px
                font-size 24px


</style>
