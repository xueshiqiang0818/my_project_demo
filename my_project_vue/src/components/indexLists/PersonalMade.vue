<template>
  <!--首页私人定制模块-->
  <div class="indexPersonalMade">
    <div class="personalMadeTitle">
      <span>私人定制</span>
    </div>
    <div class="swiper-container" id="swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(personalShopItem,index) in personalShops" :key="index">
          <ul class="personalMade_shopList">
            <li class="personalMade_shopItem" v-for="(personalItem,index) in personalShopItem" :key="index">
              <div class="shopImg_bg">
                <img :src="personalItem.listPicUrl" alt="">
                <span>{{personalItem.name}}</span>
                <span>￥{{personalItem.retailPrice}}</span>
              </div>
            </li>
<!--            <li class="personalMade_shopItem">
              <div class="shopImg_bg">
                <img src="http://yanxuan.nosdn.127.net/bf718866cf1a7fbe7617748130e49483.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>趣味闹钟 游戏表情</span>
                <span>￥39.8</span>
              </div>
            </li>
            <li class="personalMade_shopItem">
              <div class="shopImg_bg">
                <img src="http://yanxuan.nosdn.127.net/bf718866cf1a7fbe7617748130e49483.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>趣味闹钟 游戏表情</span>
                <span>￥39.8</span>
              </div>
            </li>-->
          </ul>
        </div>
<!--        <div class="swiper-slide">
          <ul class="personalMade_shopList">
            <li class="personalMade_shopItem">
              <div class="shopImg_bg">
                <img src="http://yanxuan.nosdn.127.net/bf718866cf1a7fbe7617748130e49483.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>趣味闹钟 游戏表情</span>
                <span>￥39.8</span>
              </div>
            </li>
            <li class="personalMade_shopItem">
              <div class="shopImg_bg">
                <img src="http://yanxuan.nosdn.127.net/bf718866cf1a7fbe7617748130e49483.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>趣味闹钟 游戏表情</span>
                <span>￥39.8</span>
              </div>
            </li>
            <li class="personalMade_shopItem">
              <div class="shopImg_bg">
                <img src="http://yanxuan.nosdn.127.net/bf718866cf1a7fbe7617748130e49483.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>趣味闹钟 游戏表情</span>
                <span>￥39.8</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul class="personalMade_shopList">
            <li class="personalMade_shopItem">
              <div class="shopImg_bg">
                <img src="http://yanxuan.nosdn.127.net/bf718866cf1a7fbe7617748130e49483.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>趣味闹钟 游戏表情</span>
                <span>￥39.8</span>
              </div>
            </li>
            <li class="personalMade_shopItem">
              <div class="shopImg_bg">
                <img src="http://yanxuan.nosdn.127.net/bf718866cf1a7fbe7617748130e49483.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>趣味闹钟 游戏表情</span>
                <span>￥39.8</span>
              </div>
            </li>
            <li class="personalMade_shopItem">
              <div class="shopImg_bg">
                <img src="http://yanxuan.nosdn.127.net/bf718866cf1a7fbe7617748130e49483.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>趣味闹钟 游戏表情</span>
                <span>￥39.8</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul class="personalMade_shopList">
            <li class="personalMade_shopItem">
              <div class="shopImg_bg">
                <img src="http://yanxuan.nosdn.127.net/bf718866cf1a7fbe7617748130e49483.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>趣味闹钟 游戏表情</span>
                <span>￥39.8</span>
              </div>
            </li>
            <li class="personalMade_shopItem">
              <div class="shopImg_bg">
                <img src="http://yanxuan.nosdn.127.net/bf718866cf1a7fbe7617748130e49483.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>趣味闹钟 游戏表情</span>
                <span>￥39.8</span>
              </div>
            </li>
            <li class="personalMade_shopItem">
              <div class="shopImg_bg">
                <img src="http://yanxuan.nosdn.127.net/bf718866cf1a7fbe7617748130e49483.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>趣味闹钟 游戏表情</span>
                <span>￥39.8</span>
              </div>
            </li>
          </ul>
        </div>-->
      </div>
    </div>
    <div class="paginationWrap">
      <div class="swiper-pagination swiper-pagination-custom" id="pagination2"></div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "PersonalMade",

    computed:{
      ...mapState({
        personalShop:(state)=>state.home.personalShop
      }),
      personalShops(){
        let {personalShop}=this
        let smallArr=[]
        let bigArr=[]
        personalShop.forEach((item,index)=>{
          if (smallArr.length===0){
            bigArr.push(smallArr)
          }
          smallArr.push(item)
          if(smallArr.length===3){
            smallArr=[]
          }
        })
        return bigArr
      }
    },
    mounted(){
      this.$store.dispatch('getHomeDate')
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/mixin/mixin.styl'
  .indexPersonalMade
    width 100%
    background #fff
    height 470px
    margin-bottom 20px
    .personalMadeTitle
      box-sizing border-box
      width 100%
      height 100px
      line-height 100px
      padding 0 30px
      font-size 32px
    .swiper-container
      .swiper-wrapper
        .swiper-slide
          .personalMade_shopList
            clearfix()
            font-size 0
            .personalMade_shopItem
              float left
              margin-left 25px
              display inline-block
              width 216px
              height 310px
              .shopImg_bg
                img
                  width 216px
                  height 216px
                  background $bgc-img
                  margin-bottom 12px
                span
                  width 216px
                  height 72px
                  padding 0 5px
                  margin-bottom 10px
                  box-sizing border-box
                  font-size 24px
                  color #000
    .paginationWrap
      position relative
      width 100%
      height 60px
      .swiper-pagination-custom
        top 0
        left 0
        width 100%
        height 60px
        .swiper-pagination-customs
          float left
          display block
          width 12px
          height 12px
          border-radius 50%
          background #000
          opacity .3
          margin 0 5px
        .swiper-pagination-customs-active
          opacity 1
          background-color #B4282D
</style>
