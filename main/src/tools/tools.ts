export const title = '撒阿斯顿'
export const tree = [
  {
    name: 'Home',
    path: '/',
    id: 1,
    pid: 1,
    meta: {
      title: '首页'
    },
    component: () => import('@/page/index.vue')
  },
  {
    name: '权限',
    path: '/home/permission',
    id: 2,
    pid: 2,
    component: () => import('@/page/permission/index.vue')
  },
  {
    name: '组件',
    path: '/home/com',
    id: 3,
    pid: 3,
    component: () => import('@/page/com/index.vue')
  },
  {
    name: '可视化',
    path: '/home/visualization',
    id: 4,
    pid: 4,
    component: () => import('@/page/visualization/index.vue')
  }
]