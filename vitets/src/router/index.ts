import { createWebHistory, createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: {
      name: "首页"
    },
    component: () => import('../visualeditor/Index.vue')
  },
  {
    path: '/index',
    meta: {
      name: "商城首页"
    },
    component: () => import('../components/phone/index.vue')
  },
  {
    path: '/page',
    component: () => import('../components/page/one/Index.vue'),
    redirect: '/page/home', // 重定向
    children: [
      {
        path: '/page/home',
        component: () => import('../components/page/one/show.vue'),
        name: 'Home',
      }
    ]
  },
  // {
  //   path: "/:catchAll(.*)",
  //   name: '404',
  //   component: () => import("@/layouts/error.vue").catch(() => { })
  // },
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(), // hash路由
  routes
})
router.beforeEach((to, from, next) => {
  next()
})
export default router