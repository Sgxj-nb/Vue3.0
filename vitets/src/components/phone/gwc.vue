<template>
  <div>
    {{ zhiL }}
  </div>
  <div>
    <Tabb></Tabb>
  </div>
</template>
<script lang="ts" setup>
import Tabb from "../zu/tabber.vue";

// 测试数组
interface shiwzu {
  value?: string;
  name?: string;
}

let zhiL: shiwzu[] = [{ name: "xxxx", value: "xxxxxsadad" }];
</script>
