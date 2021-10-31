import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ElButton } from "element-plus";
import 'element-plus/dist/index.css'
import store from './store/index'
import 'lib-flexible/flexible'
import { Button, Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css'; // 全局引入样式
import { use } from 'element-plus/es/locale';
const app = createApp(App)
// vant
app.use(Button)
  .use(Swipe)
  .use(SwipeItem)

// elm
app.use(ElButton)

// 路由
app.use(router)

// vuex
app.use(store)
router.isReady().then(() => app.mount('#app')) // 路由挂载