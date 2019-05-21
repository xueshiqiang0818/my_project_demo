import ajax from './ajax'

export const reqHomeData=()=>ajax('/home')
export const reqCategoryList=()=>ajax('/categorylist')

