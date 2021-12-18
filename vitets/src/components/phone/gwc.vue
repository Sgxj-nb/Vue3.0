<template>
  <div>pani练习</div>
  <div>
    {{ useCounter.count }}
  </div>

  <div>
    {{ zhiinfoa }}
  </div>
  <div>
    <el-button type="primary" @click="addinfoaww">点击存值</el-button>
  </div>
  <div>
    <Tabb></Tabb>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue-demi";
import { useCounterStore } from "../../pain/index";
import Tabb from "../zu/tabber.vue";

const useCounter = useCounterStore();

// 点击传值到pani
function addinfoaww() {
  // 调取pain自定义方法
  useCounter.setifnoi(3000);
}

let zhiinfoa = computed(() => useCounter.duixiang);
</script>
