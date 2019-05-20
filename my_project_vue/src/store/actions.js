
import {reqHomeData} from "../api";
import {UPDATA_HOMEDATA} from "./mutation_type";

export default {
  async getHomeData({state,commit}){
    const result=await reqHomeData()
    if(result.data.code===0){
      let homeData=result.data.data
      commit(UPDATA_HOMEDATA,homeData)
    }
  }
}
