<template>
  <div>知识点</div>
  <div>
    <button @click="add">跳转第二个界面</button>
    <el-button type="primary">asdasdasd</el-button>
  </div>

  <!-- 子组件 -->
  <div>
    <Info
      :c="'xxxxxxx'"
      :a="'xxxxxasdasd'"
      ref="comp"
      @myClick="myClick"
      :zhi="zhi"
      :showinfo="showinfo"
    ></Info>
  </div>
  <div>儿子来了{{ erzi.name }}</div>

  <!-- 父组件调取子组件方法了 -->
  <div>
    <el-button type="primary" @click="addfuqin"
      >我是父亲我来调取子组件了</el-button
    >
  </div>

  <!-- 通过v-mode来完成父组件传递子组件的值 -->
  <div>
    <!-- <el-button type="primary" @click="addinfoaaaa">父组件传子组件</el-button> -->
  </div>
</template>
<script setup lang="ts">
import Info from "../components/zu/index.vue";
import { onMounted, reactive, ref } from "vue-demi";
import { useRouter } from "vue-router";
let router = useRouter();
// 跳转第二个界面
function add(): void {
  router.push({ path: "/page/home", query: { id: 1 } });
}
let zhi = ref(1); // 传递给父组件的值
let showinfo = ref([{ name: "xxx", info: "xxx" }]);

// 我来接我儿子(需要注意的值必须是reactive)
let erzi: any = reactive({ name: "" });
const myClick = (value: string) => {
  erzi.name = value;
  console.log(erzi.name);
};

// 父组件获取子组件的属性或者调用子组件方法
let comp: any = ref(null);
function addfuqin() {
  console.log(comp.value.childName); // 值
  comp.value.someMraaa(); //方法
}

onMounted(function () {});
</script>
