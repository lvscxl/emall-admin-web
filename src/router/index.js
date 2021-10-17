import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Login from '@/views/login/index'


Vue.use(Router)

export const constantRouterMap = [
  {path: '/', component:() => import('@/views/login/index')}
]
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     }
//   ]
// })

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     }
//   ]
// })

export default new Router({
  routes: constantRouterMap
})
