## Vue3 Ts模板

- vite搭建
  - `npm install vue-router@4`
  - 别名插件`npm install --save @types/node`
  - 组件 `https://www.antdv.com/docs/vue/migration-v3-cn`
  - 按需导入 `npm i unplugin-vue-components -D` 组件
    - `https://blog.csdn.net/weixin_44002092/article/details/121338461`
  - 请求`npm install axios`  
- 特殊记
  - 路由传参
  ```
   import {useRouter} from 'vue-router';
   const router=useRouter();
   router.push({path:'xxx',query:{name:'xxxx'}})
   router.query.name as string
  ```  
  