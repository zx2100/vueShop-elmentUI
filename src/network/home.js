import { http } from 'network/network'

export function userLogin(user){
  // console.log(user)
  return http({
    url: '/login',
    method: 'post',
    params: user
  })

}