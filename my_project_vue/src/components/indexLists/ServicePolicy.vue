<template>
  <!--首页服务政策-->
  <div class="indexServicePolicy">
    <ul class="policyList">
      <li v-for="policyItem in policyDescList" :key="policyItem.desc">
        <i class="iconfont iconjiaoyi"></i>
        <span>{{policyItem.desc}}</span>
      </li>
      <!-- <li>
         <i class="iconfont iconjiaoyi"></i>
         <span>30天无忧退货</span>
       </li>
       <li>
         <i class="iconfont iconjiaoyi"></i>
         <span>48小时快速退款</span>
       </li>-->
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ServicePolicy",
    props:{
      policyDescList:Array
    }
  }
</script>

<style lang="stylus" scoped>
  .indexServicePolicy
    padding 0 30px
    background #fff
    .policyList
      height 72px
      line-height 72px
      display flex
      li
        flex 1
        float left
        font-size 0
        color #b4282d
        .iconfont
          font-size 24px
          margin-right 8px
        span
          font-size 24px
</style>
