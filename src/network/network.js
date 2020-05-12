import axios from 'axios'

export function http(config){
  const instance = axios.create({
    // baseURL: "https://www.liulongbin.top:8888/api/private/v1",
    baseURL: "http://timemeetyou.com:8889/api/private/v1/"

  })
  instance.interceptors.request.use(config =>{
    // 拦截请求，携带上Authorization,用作请求
    config.headers.Authorization = window.sessionStorage.getItem("token")
    // console.log(config)
    return config
  })
  instance.interceptors.response.use(res => {
    return res.data
  })
  
  return instance(config)
}

