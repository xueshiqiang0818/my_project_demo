import {UPDATA_HOMEDATA} from "./mutation_type";

export default {
  [UPDATA_HOMEDATA](state,homeData){
    state.homeData=homeData
}
}
