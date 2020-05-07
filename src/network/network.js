import axios from 'axios'

export function http(config){
  const instance = axios.create({
    baseURL: "https://www.liulongbin.top:8888/api/private/v1",

  })
  instance.interceptors.response.use(res => {
    return res.data
  })
  
  return instance(config)
}

