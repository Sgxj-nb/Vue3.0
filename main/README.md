## Vue3 Ts模板

- vite搭建
  - `npm install vue-router@4`
  - 别名插件`npm install --save @types/node`
  - 组件 `https://www.antdv.com/docs/vue/migration-v3-cn`
  - 按需导入 `npm i unplugin-vue-components -D` 组件
    - `https://blog.csdn.net/weixin_44002092/article/details/121338461`
  - 请求 `npm install axios`  
  - 全局变量Pinia `npm install pinia`
- 特殊记
  - 路由传参
  ```
   import {useRouter ,useRoute} from 'vue-router';
   const router=useRouter();
   const route = useRoute();
   router.push({path:'xxx',query:{name:'xxxx'}})
   router.query.name as string
   route.query.name
  ```  
  - 组件传值
    - 子组件传递方法给父组件
    ```
     import {defineEmits} from 'vue'
     let $emit = defineEmits(['onclick'])
     $emit('onclick',{})

     <test @onclick="onclick" />
     function onclick(d){}
    ```  

- 参考界面
  - `https://demo.gin-vue-admin.com/#/login`  

- 踩坑记录
  - 全局方法利用代理访问,如果说是自己定义的可能在proxy上是拿不到的
    即使给?.也是一样,解决方法是自己新建一个ts文件做中间件去补全方法

  - 路径别名path,在.vue的文件中去访问 '@/xxx/xxx/xxx'这类文件时,即使
    配置了别名只会在ts文件中起作用,在vue文件中因为vue2的那个插件问题
    导致会发生红色波浪的错误,但是现在最新的vetur最新也是4.7的版本,貌似
    也回退不了,所以这里就不需要管他.

  - 在静态文件图片文件采用import.meth.url时
     ```
      new URL('./img/${xxxxx}',import.meta.url).href
     ```  
    需按照上面的形式来写,不然在打包时vite无法去解析静态资源的图片在哪,
    需要记住,ssr类型的图片是不能够用这种方式的,直接普通变量就好

  - 本地代理设置
    - 中文文档中写了一部分,不是很有用,需要看代理设置的github的文档开启重定向功能才行 