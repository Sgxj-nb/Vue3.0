<template>
  <div>
    <div>动态组件(使用is注入法来完成)</div>
    <div>
      <el-button type="success" @click="add">切换</el-button>
    </div>
    <div>
      <component :is="setInf"></component>
    </div>
  </div>
</template>
<script lang="ts" setup>
/***
 * 需要注意的是vue3.2引入组件是自动注册的所以不在需要和vue2一样的方式引入了
 * */
import { reactive, shallowRef } from "vue-demi";
import One from "./zu/index.vue";
import Two from "./zu/indextwo.vue";
/***
 *
 * 需要注意的是不要使用ref reactive内部就是通过ref来实现的所以他们实现的是
 * 一个东西 reactive会递归响应内部层级 会造成没有必要的性能消耗
 * 使用 shallowRef 会创建一个ref 将会追踪他的vvalue来进行更改操作 但是并不会针对变更后的.value来做响应的代理操作
 * @param shallowRef 需要注意的是此API只能做浅响应式 也就是里面如果在加入一个对象类型的参数就不会做到响应式了 不进行对象类型的响应式
 * */
const setInf = shallowRef(One);

// 动态切换组价事件
function add() {
  setInf.value = Two;
}
</script>
