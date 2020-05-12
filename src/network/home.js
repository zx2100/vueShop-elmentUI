import { http } from 'network/network'

export function userLogin(user){
  // console.log(user)
  return http({
    url: '/login',
    method: 'post',
    params: user
  })

}

export function getMenus(){
  // console.log(user)
  return http({
    url: '/menus',
    method: 'GET',   
  })
}


// 获取用户列表
export function getUsers(queryUser){
  return http({
    url: '/users',
    method: 'GET',   
    params: {
      ...queryUser
    }
  })
}