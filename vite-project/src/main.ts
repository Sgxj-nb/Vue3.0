import { createApp } from 'vue'; // 工厂函数
import App from './App.vue';
import router from './router/index';
/**
 * @全局引入的组件
 * @以及CSS样式
 * */
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);

// 挂载全局封装方法(时间戳)
import { time, hex_md5 } from './utils/tools'
app.config.globalProperties.$fliter = time;
// md5加密
app.config.globalProperties.$hex_md5 = hex_md5
app.use(ElementPlus)
app.use(router)
app.use(time)
app.use(hex_md5)
app.mount('#app');