<template>
  <div>pani练习</div>
  <div>
    {{ useCounter.count }}
  </div>

  <div v-for="(d, index) in zhiinfoa" :key="index">
    <img style="width: 27px" :src="d.goodsCoverImg" alt="" />

    <span style="font-size: 12px"> {{ d.goodsName }}</span>
    <span style="margin-left: 25px" @click="addjs(d, index)">减少</span>
    <span>{{ num }}</span>
    <span @click="adda(d, index)">增加</span>
  </div>
  <div>
    <el-button type="primary" @click="addinfoaww">点击存值</el-button>
  </div>
  <div>
    <Tabb></Tabb>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue-demi";
import { useCounterStore } from "../../pain/index";
import Tabb from "../zu/tabber.vue";

const useCounter = useCounterStore();

// 点击传值到pani
function addinfoaww() {
  // 调取pain自定义方法
  useCounter.setifnoi(3000);
}

let zhiinfoa = computed(() => useCounter.duixiang);
let num = ref(1);

// 减少
function addjs(d, index) {}

// 增加
function adda(d, index) {}
</script>
