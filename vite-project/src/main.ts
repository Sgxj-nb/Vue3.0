import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
/**
 * @全局引入的组件
 * @以及CSS样式
 * */
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);
app.use(ElementPlus)
app.use(router)
app.mount('#app');
