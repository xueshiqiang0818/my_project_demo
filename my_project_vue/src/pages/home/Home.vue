<template>
  <div class="home">
    <div class="headerContainer">
      <wy-header/>
      <wy-navlist :kingKongList="kingKongList"/>
    </div>
    <div class="home_content">
      <section class="content">
        <wy-banner/>
        <!--首页服务政策-->
        <ServicePolicy :policyDescList="policyDescList"/>
        <!--首页分类导航-->
        <CategroyNav/>
        <!--首页限时抢购-->
        <TimeSale/>
        <!--首页商品指南模块-->
        <ShopModule/>
        <!--首页私人定制模块-->
        <PersonalMade :personalShop="personalShop"/>
        <!--首页限时购-->
        <LimitTimeSale/>
        <!--首页新品首发-->
        <NewPub/>
        <!--人气推荐-->
        <Recommed/>
        <!--类目热销榜-->
        <HotSaleList/>
        <!--品牌制造商直供-->
        <BrandFor/>
        <!--520活动列表-->
        <ActiveList/>
        <!--解决底部不显示-->
        <div class="jiejuedibu"></div>
      </section>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
  import BScroll from 'better-scroll'
  import Banner from '../../components/banner/banner'
  import ServicePolicy from '../../components/indexLists/ServicePolicy'
  import CategroyNav from '../../components/indexLists/CategroyNav'
  import LimitTimeSale from '../../components/indexLists/LimitTimeSale'
  import NewPub from '../../components/indexLists/NewPub'
  import PersonalMade from '../../components/indexLists/PersonalMade'
  import ShopModule from '../../components/indexLists/ShopModule'
  import TimeSale from '../../components/indexLists/TimeSale'
  import Recommed from '../../components/indexLists/Recommed'
  import HotSaleList from '../../components/indexLists/HotSaleList'
  import BrandFor from '../../components/indexLists/BrandFor'
  import ActiveList from '../../components/indexLists/ActiveList'

  export default {
    name: "Home",
    components:{
      'wy-banner':Banner,
      ServicePolicy,
      CategroyNav,
      LimitTimeSale,
      NewPub,
      PersonalMade,
      ShopModule,
      TimeSale,
      Recommed,
      HotSaleList,
      BrandFor,
      ActiveList
    },
    computed:{
      ...mapState({
        policyDescList:(state)=>state.home.policyDescList,
        kingKongList:(state)=>state.home.kingKongList,
        personalShop:(state)=>state.home.personalShop,
        flashSaleModule:(state)=>state.home.flashSaleModule,
        newItemList:(state)=>state.home.newItemList,
        popularItemList:(state)=>state.home.popularItemList,
      })
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.home_content',{
          scrollY: true,
          click: true,
          bounce:false
        })
        new BScroll('.activeShopWrap',{
          scrollY: true,
          click: true,
          bounce:false
        })
      })
      this.$store.dispatch('getHomeData')
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/mixin/mixin.styl'
  .home
    width 100%
    height 100%
    background #f4f4f4
    .headerContainer
      position fixed
      top 0
      left 0
      width 100%
      background #fff
      z-index 5
    .home_content
      height 100%
      .content
        .jiejuedibu
          width 100%
          height 250px
          background rgba(0,0,0,.2)
</style>
