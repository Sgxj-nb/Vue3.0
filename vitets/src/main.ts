import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ElButton } from "element-plus";
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(router)
app.use(ElButton)
router.isReady().then(() => app.mount('#app')) // 路由挂载