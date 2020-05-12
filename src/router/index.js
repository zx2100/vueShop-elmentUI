import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from 'views/login/Login'

Vue.use(VueRouter)
// 必要时加载
const Console = () => import("components/console/Console")
const Console_welcome = () => import ("components/console/Welcome")
const Console_users = () => import ("components/users/Users")
// 组件路由
const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/console",
    component: Console,
    redirect: "/console/welcome",
    children: [
      {
        path: "welcome",
        component: Console_welcome
      },
      {
        path: "users",
        component: Console_users
      }
    ]
  },
 
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 挂载导航守卫，未登录的跳转到登陆页
router.beforeEach((to, from, next) => {
  // 如果是直接访问登陆页，放行
  if (to.path == "/login") next()
  // 判断是否有token，如果没有则跳转到登陆页
  const token = window.sessionStorage.getItem("token")
  // 如果没有获取到，跳转到登录页
  if (!token) next("/login")

  next()
})

export default router
