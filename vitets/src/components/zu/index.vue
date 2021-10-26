<template>
  <!-- 子组件 -->
  <div>
    <div>asdasdasdasd</div>
    <div><el-button type="primary">父组件传递的</el-button> {{ zhi }}</div>
    <div>
      <el-button type="primary">父组件传递的</el-button>
      {{ showinfo }}
    </div>
  </div>
  <div>
    <!-- 点击按钮的值通过点击传给父组件 -->
    <el-button type="primary" @click="addifoa">子传父</el-button>
  </div>

  <!-- 子组件调取父组件 -->
  <div>
    <el-button type="primary" @click="addshowinof"
      >子调父方法-{{ zhiinfoaaa }}</el-button
    >
  </div>
</template>
<script lang="ts" setup>
import { useAttrs, onUnmounted, ref } from "vue-demi";
import mitt from "../../bas/index";
// 父组件接值
const props = defineProps({
  // 第一种写法
  zhi: Number,
  // 第二种写法
  showinfo: {
    type: Array,
    default: [],
  },
});

// 子传父
// 3.2
// 写法
const eitm = defineEmits(["myClick", "myClick2", "a", "c", "showinfoaaaa"]);
const addifoa = () => {
  eitm("myClick", "我是儿子我来了");
};
// 等待被父组件调取
defineExpose({
  childName: "子组件属性",
  someMraaa() {
    console.log("我子组件调用了");
  },
});

// 通过attrs拿到父组件的值
const attrs = useAttrs();
console.log(attrs.c, attrs.a);

// 我是子组件我要调取父组件的方法
const addshowinof = () => {
  eitm("showinfoaaaa");
};

let zhiinfoaaa: any = ref("");
// base接值
const someMethed: any = (value: string): void => {
  zhiinfoaaa.value += value;
};
mitt.on("addcreshi", someMethed);
onUnmounted(() => {
  mitt.off("addcreshi", someMethed);
});
</script>
