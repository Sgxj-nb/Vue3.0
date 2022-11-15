/**
 * createRouter 这个为创建路由的方法
 * createWebHashHistory 这个就是vue2中路由的模式，
 *                      这里的是hash模式，这个还可以是createWebHistory等
 * RouteRecordRaw 这个为要添加的路由记录，也可以说是routes的ts类型
 */
import { createRouter, createWebHashHistory, RouteRecordRaw, useRouter } from 'vue-router';
import { tree } from '@/tools/tools'
import { userConten } from '@/pinia/index'
// import { Menu } from '@/tools/function'
import Home from '@/page/index.vue'

const routes: Array<RouteRecordRaw> = [{
  path: '/login',
  name: 'Login',
  meta: {
    title: '登录'
  },
  component: () => import('@/page/login.vue')
},
{
  path: '/',
  redirect: "/home/index"
},
{
  path: '/',
  name: 'Home',
  component: Home,
  children: [
    {
      path: '/home/index',
      meta: {
        title: '首页',
        index: 0
      },
      component: () => import('@/page/visualization/index.vue')
    },
    {
      path: '/home/permission',
      meta: {
        index: 1,
        title: '权限'
      },
      component: () => import('@/page/permission/index.vue')
    },
    {
      path: '/home/com',
      meta: {
        index: 2,
        title: '组件'
      },
      component: () => import('@/page/com/index.vue')
    },
    {
      path: '/home/visualization',
      meta: {
        index: 3,
        title: '可视化'
      },
      component: () => import('@/page/test/index.vue')
    }
  ]
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 判断是否登录(路由前置拦截)
router.beforeEach(async function (to, from, next) {
  if (!localStorage.getItem('token') && to.name !== 'Login') {
    document.title = '登录'
    window.location.hash = "#/login";
    window.location.reload()
  } else {
    // 如果说有token开始鉴权路由
    // router.addRoute()
    // if (!userConten().userMenu) {
    //   await Menu()
    //   console.log(userConten().userMenu, '我拿到我的菜单了');
    // }
    next()
  }
})

// 路由后置拦截
router.afterEach(function (to, from): void {
  document.title = to.meta?.title as string;
})

// // 写入动态路由
// tree.forEach((res: any) => {
//   router.addRoute(res)
// })
export default router