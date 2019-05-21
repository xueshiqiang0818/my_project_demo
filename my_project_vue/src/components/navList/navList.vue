<template>
  <div class="nav" v-show="$route.path==='/home'">
    <div class="navList">
      <ul>
        <li :class="{navActive:num===index}" v-for="(kingKongItem,index) in kingKongList"
            :key="kingKongItem.text" @click="goTo(index)">
          <span>{{kingKongItem.text}}</span>
        </li>
      </ul>
    </div>
    <div class="arrow" @click="isShuowMaskNav=!isShuowMaskNav">
      <i class="iconfont iconjiantoushang"></i>
    </div>
    <div class="maskNav" v-show="isShuowMaskNav">
      <h5>全部频道</h5>
      <ul class="maskList">
        <li :class="{maskActive:num===index}" v-for="(kingKongItem,index) in kingKongList"
            :key="kingKongItem.text" @click="goTo(index)">
          <span>{{kingKongItem.text}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: "navList",
    data(){
      return {
        isShuowMaskNav:false,
        num:0
      }
    },
    props:{
      kingKongList:Array
    },
    methods:{
      goTo(index){
        this.num=index
      }
    },
  }
</script>

<style lang="stylus" scoped>
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
