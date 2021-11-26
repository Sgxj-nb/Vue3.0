<template>
  <div>pani练习</div>
  <div>
    {{ useCounter.count }}
  </div>
  <div>
    <el-button type="primary" @click="addinfoaww">点击存值</el-button>
  </div>
  <div>
    <Tabb></Tabb>
  </div>
</template>
<script lang="ts" setup>
import Tabb from "../zu/tabber.vue";
import { useCounterStore } from "../../pain/index";
const useCounter = useCounterStore();

// 点击传值到pani
function addinfoaww() {
  // 调取pain自定义方法
  useCounter.setifnoi(3000);
}
</script>
