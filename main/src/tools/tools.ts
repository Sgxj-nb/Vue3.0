export const title = '撒阿斯顿'
export const tree = [
  {
    name: 'Home',
    path: '/',
    id: 1,
    pid: 1,
    meta: {
      title: '首页',
      index: 0
    },
    component: () => import('@/page/index.vue')
  },
  {
    name: '权限',
    path: '/home/permission',
    id: 2,
    pid: 2,
    meta: {
      index: 1,
      title: "权限"
    },
    component: () => import('@/page/permission/index.vue')
  },
  {
    name: '组件',
    path: '/home/com',
    meta: {
      index: 2,
      title: "组件"
    },
    id: 3,
    pid: 3,
    component: () => import('@/page/com/index.vue')
  },
  {
    name: '可视化',
    path: '/home/visualization',
    meta: {
      index: 3,
      title: "可视化"
    },
    id: 4,
    pid: 4,
    component: () => import('@/page/visualization/index.vue')
  }
]