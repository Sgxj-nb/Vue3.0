<template>
  <div>知识点</div>
  <div>
    <button @click="add">跳转第二个界面</button>
    <el-button type="primary">asdasdasd</el-button>
  </div>

  <img src="/images/dasdascsdvfnffjyttio.png" alt="" />

  <!-- 子组件 -->
  <div>
    <Info
      :c="'xxxxxxx'"
      :a="'xxxxxasdasd'"
      ref="comp"
      @myClick="myClick"
      :zhi="zhi"
      :showinfo="showinfo"
      @showinfoaaaa="showinfoaaaa"
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

  <!-- 测试base传值 -->
  <div>
    <el-button @click="addinfoaa" type="primary">测试base机制(mitt)</el-button>
  </div>

  <!-- 测试vuex -->
  <div>
    <el-button type="primary" @click="addinfocaasadasdasd"
      >点击传值vuex</el-button
    >
    <div>
      <!-- <div>{{ $store.state.count }}</div>
      <button @click="$store.commit('add')">按钮</button> -->
    </div>
  </div>
  <div>
    <el-button type="primary" @click="addaaawdddd">跳转实列网站</el-button>
  </div>

  <div>
    <!-- 异步组件 -->
    <div>
      <div>
        <el-button @click="addroytinfo" type="primary">异步组件实例</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import mitt from "../bas/index";
import Info from "../components/zu/index.vue";
import { onMounted, reactive, ref, computed } from "vue-demi";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
let router = useRouter();

// 跳转实列网站
function addaaawdddd() {
  router.push("/index");
}

// 获取编程式导航的值
// const currentId = route.params.id

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

// 父组件来调取我的方法
function showinfoaaaa(value: any) {
  console.log(1111111111);
}

// 测试使用base传值(mitt)

function addinfoaa() {
  mitt.emit("addcreshi", "我是你爸爸");
}

// 测试vuex
const store = useStore();
const count = computed(() => {
  return store.state.zhis;
});
console.log("直接获取vuex响应式的值", count.value);

// 存值
function addinfocaasadasdasd() {
  store.commit("zhiinfoa", 9999);
  console.log(aaaaa.value);
}

// 获取值
const aaaaa = computed(() => {
  return store.state.showinfo;
});

// 异步组件跳转实例
function addroytinfo() {
  router.push("/yibu");
}

onMounted(function () {});
</script>
