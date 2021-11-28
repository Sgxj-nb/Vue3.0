# 这是一个vue3.2版本 

- Vue 3 + Typescript + Vite
- `npm install axios --save`
- `npm install vue-router@4`

- 进度条
- `npm install --save nprogress` 

- 安装Bas总线在替代方法
- `npm i mitt -S`

- vuex
- `npm install vuex@next --save`

- 移动端自适应
- `npm install lib-flexible --save-dev`
- `npm i postcss-pxtorem -D`

- 一款基于移动端滚动的插件
- `https://better-scroll.github.io/docs/zh-CN/guide/#betterscroll-%E6%98%AF%E4%BB%80%E4%B9%88`
<!--  @click="()=>$router.push('/home')" 直接写再模板上的写法 -->

- 没有path的话('按照 @types/node 即可')
- `npm i @types/node -D`

- 生产环境生成 .gz / .br文件
- `npm add --dev vite-plugin-compression`

- 下一代状态管理器
- `npm install pinia@next`

```

// Vite2设置别名路径方式二
        alias: [
            {
                find: "@",
                replacement: path.resolve("./src")
            },
            {
                find: "@image",
                replacement: path.resolve("./src/assets/images")
            },
            {
                find: "@router",
                replacement: path.resolve("./src/router")
            },
            {
                find: "@store",
                replacement: path.resolve("./src/store")
            },
            {
                find: "@api",
                replacement: path.resolve("./src/api")
            }
        ]
```


## 缓存界面开

```
onActivated(() => { // 被包裹组件被激活的状态下触发
      // 逻辑代码
 }
onDeactivated(() => { // 在被包裹组件停止使用时触发
    // 逻辑代码
})
```