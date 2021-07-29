# 新一代构造工具项目文件配置说明

- 最新版本的饿了吗组件
 - [UI组件地址链接](https://element-plus.gitee.io/#/zh-CN/component/quickstart)`https://element-plus.gitee.io/#/zh-CN/component/quickstart`
- vite专属router配置
 - 执行`npm install vue-router@4 -S`
- `专属文件配置是在vite.config.js文件`

## 项目目录结构(以后优化)


## vite前端构架工具解释
- 在语法中其实就是很快的意思 最为新一代前端构造工具，作用于面向现代浏览器，基于ECMA标准的ES module实现的一个更轻更快的web应用工具
- 它一般都是使用比较先进的浏览器作为项目开发， 而不会选择一些比较老的浏览器来完成项目开发 比如IE，它是不会考虑它的(目前是直接放弃)
- 造在vite中最重要的就是他是 ES module(在现代浏览器中)，由于是面向于现带浏览器所以，他利用浏览器去解析imports，在服务器端按需编译返回
完全是跳过打包过程，同时支持Vue文件和HMR(热跟新)，针对生产环境可以使用rollup来完成打包