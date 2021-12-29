import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    name:'Home',
    component: ()=>import("../views/Home/home.vue"),
    meta: {
      index: 0,
    },
    children:[
      {
        path:'/work',
        name:'Work',
        component: ()=>import("../views/Work/work.vue"),
        meta: {
          index: 1,
        },
      },
      {
        path:'/shop',
        name:'Shop',
        component: ()=>import("../views/Shop/shop.vue"),
        meta: {
          index: 1,
        },
      },
    ]
  },

  {
    path:'/login',
    name:'Login',
    component: ()=>import("../views/Login/login.vue"),
    meta: {
      index: 2,
    },
  },
  // {
  //   path:'/login',
  //   name:'Login',
  //   component:Login,
  //   beforeEnter:(to,from,next)=>{
  //     const {islogin} = localStorage
  //     islogin ? next({name:'Home'})  : next() 
  //   },
   
  // },
 
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.beforeEach((to,from,next)=>{
//     const {islogin} = localStorage
//     islogin || to.name === 'Login'? next() : next({name:'Login'}) 
// })

export default router
