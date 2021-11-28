import { createWebHistory, createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "首页",
    meta: {
    },
    component: () => import('@/visualeditor/Index.vue')
  },
  // {
  //   path: '/ssss',
  //   name: "首页s",
  //   meta: {
  //   },
  //   component: () => import('@/views/redirect/indexx.vue')
  // },
  {
    path: '/index',
    meta: {
      keepAlive: true,
      name: "商城首页",

    },
    component: () => import('@/components/phone/index.vue')
  },
  {
    path: '/indexs',
    meta: {
      keepAlive: true,
      name: "分类",

    },
    component: () => import('@/components/phone/fl.vue')
  },
  {
    path: '/indexss',
    meta: {
      keepAlive: true,
      name: "购物车"
    },
    component: () => import('@/components/phone/gwc.vue')
  },
  {
    path: '/indexsss',
    meta: {
      keepAlive: true,
      name: "我的"
    },
    component: () => import('@/components/phone/wd.vue')
  },
  {
    path: '/xq',
    meta: {
      keepAlive: false,
      name: "详情界面"
    },
    component: () => import('@/components/phone/zi/xq.vue')
  },
  {
    path: '/page',
    component: () => import('@/components/page/one/Index.vue'),
    redirect: '/page/home', // 重定向
    children: [
      {
        path: '/page/home',
        component: () => import('@/components/page/one/show.vue'),
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