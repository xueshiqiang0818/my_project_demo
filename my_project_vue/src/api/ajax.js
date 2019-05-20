import axios from 'axios'

function ajax(url='',data={},method='GET') {
  return new Promise((resolve, reject)=>{
    let promise
    if(method==='GET'){
      promise=axios.get(url,{
        params: data
      })
    }else {
      promise=axios.post(url, data)
    }
    promise.then((res)=>{
      resolve(res)
    }).catch((err)=>{
      console.log(err)
    })
  })
}
export default ajax
