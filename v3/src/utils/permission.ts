import router from '@/router'

router.beforeEach(async (to: any, form, next) => {
  // 动态设置title
  document.title = to.meta.title || '我是vue3的模板项目'

  const infoa = localStorage.getItem('token')
  // 判断是否有token
  if (infoa) {
    if (to.path === '/loading') {
      // 如果有token去到了首页就要重定向到登陆界面
      next({ path: '/' })
    }
  } else {
    next()
  }
})
