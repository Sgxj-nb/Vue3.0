<template>
  <div v-for="(d, index) in arrlist.hganshu" :key="d.name">
    <van-radio-group v-model="checked">
      <van-radio :name="index" @click="radClick(d, index)">
        <div>{{ d.name }}</div>
      </van-radio>
    </van-radio-group>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue-demi";

let checked = ref(null);
let oldvalue = ref(null);
let radioChangea = ref(false);
let arrlist = reactive({
  hganshu: [
    { name: "xxxx", id: 1 },
    { name: "xxxx", id: 2 },
    { name: "xxxx", id: 3 },
    { name: "xxxx", id: 4 },
    { name: "xxxx", id: 5 },
  ],
});

function changeRad() {
  radioChangea.value = true;
}
function radClick(d, index) {
  if (index == oldvalue.value) {
    console.log(111);
    checked.value = null;
    oldvalue.value = null;
  } else {
    oldvalue.value = index;
  }
 }
</script>
