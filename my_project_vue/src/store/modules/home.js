import {reqHomeData} from "../../api";
import {
  UPDATA_KINGKONGLIST,
  UPDATA_FLASHSALEMODULE,
  UPDATA_NEWITEMLIST,
  UPDATA_PERSONALSHOP,
  UPDATA_POLICYDESCLIST,
  UPDATA_POPULARITEMLIST,
} from "../mutation_type"

const state={
  kingKongList:[],//商品导航
  policyDescList:[],//服务策略
  personalShop:[],//私人定制
  flashSaleModule:{},//限时购
  newItemList:[],//新品首发
  popularItemList:[],//人气推荐
}

const mutations={
  [UPDATA_KINGKONGLIST](state,kingKongList){
    state.kingKongList=kingKongList
  },
  [UPDATA_FLASHSALEMODULE](state,flashsalemodule){
    state.flashsalemodule=flashsalemodule
  },
  [UPDATA_NEWITEMLIST](state,newitemlist){
    state.newitemlist=newitemlist
  },
  [UPDATA_PERSONALSHOP](state,personalshop){
    state.personalshop=personalshop
  },
  [UPDATA_POLICYDESCLIST](state,policydesclist){
    state.policydesclist=policydesclist
  },
  [UPDATA_POPULARITEMLIST](state,popularitemlist){
    state.popularitemlist=popularitemlist
  },
}

const actions={
  async getHomeData({state,commit}) {
    const result = await reqHomeData()
    if (result.data.code === 0) {
      let homeData = result.data.data
      console.log(homeData)
      commit(UPDATA_KINGKONGLIST, homeData.kingKongModule.kingKongList)
      commit(UPDATA_FLASHSALEMODULE, homeData.flashSaleModule)
      commit(UPDATA_NEWITEMLIST, homeData.newItemList)
      commit(UPDATA_PERSONALSHOP, homeData.personalShop)
      commit(UPDATA_POLICYDESCLIST, homeData.policyDescList)
      commit(UPDATA_POPULARITEMLIST, homeData.popularItemList)
    }
  }
}

const getters={

}

export default {state,mutations,actions,getters}
