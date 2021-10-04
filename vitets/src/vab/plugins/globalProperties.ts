// 挂在全局请求方式
import { App } from 'vue';
import request from '@/utils/request';
// import router from '@/router';

const install = (app: App) => {
  app.config.globalProperties.$request = request
}
export default install