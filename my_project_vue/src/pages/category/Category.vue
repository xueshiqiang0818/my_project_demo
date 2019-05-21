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
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Category",
    computed:{

    },
    mounted(){
      this.$store.dispatch('getCategoryList')
    }
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

</style>
