<template>
  <div>
    <div
      @click="onTree(d, index)"
      v-for="(d, index) in listInfo.list"
      :key="d.id"
      class="tree"
      :style="{ 'background-color': num == d.path ? '#4D70FF' : '' }"
    >
      <div class="tree-chi">
        <div>图标</div>
        <div>{{ d.name }}</div>
        <div>二级</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TreeFn, onChange, bookList, bookObject } from "@/tools/function";
import { tree } from "@/tools/tools";
import { reactive, onMounted, ref, defineEmits, watchEffect, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { rou } from "@/page/index";
let num = ref("");
const router = useRouter();
const route = useRoute();
let $emit = defineEmits(["onRouter"]);
let listBook = reactive({
  list: [],
});
// 菜单切换
function onTree(d: rou, index: number): void {
  // stop();
  num.value = d.path;
  let some = bookList.list.some((res: rou) => res.path == d.path);
  router.push(d.path);
  onChange(d, some);
  $emit("onRouter", d);
}

// 转换树状
let listInfo = reactive({
  list: TreeFn(tree),
});

// 监听路由获取颜色
// const stop = watchEffect((onclose) => {
//   num.value = router.currentRoute.value.path as string;
// });

// 监听标签切换改版颜色和路由
watch(route, (newValue, oldValue) => {
  num.value = newValue.path;
});
onMounted(() => {});
</script>

<style scoped>
.tree-chi > div:nth-child(1) {
  padding-right: 12px;
}
.tree-chi > div:nth-child(2) {
  flex: 1;
  font-size: 16px;
}
.tree-chi {
  display: flex;
  align-items: center;
}
.tree {
  cursor: pointer;
  margin-bottom: 5px;
  padding: 12px 12px;
}
.tree:hover {
  background-color: rgba(64, 158, 255, 0.08);
}
</style>
