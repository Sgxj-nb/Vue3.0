<template>
  <div>
    <!-- <div
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
    </div> -->
    <div>
      <a-menu
        id="dddddd"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        @click="handleClick"
      >
        <div v-for="(d, index) in listInfo.list" :key="index">
          <a-sub-menu :key="d.name" @titleClick="attend">
            <template #title>{{ d.name }}</template>
            <a-menu-item v-for="q in d.children" :key="q.name">{{
              q.name
            }}</a-menu-item>
          </a-sub-menu>
        </div>
      </a-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCurrentInstance from "@/axios/requst";
import { router as menAny } from "@/page/index";
import { TreeFn, onChange, bookList, bookObject } from "@/tools/function";
import { storeToRefs } from "pinia";
import { userConten } from "@/pinia/index";
import { tree } from "@/tools/tools";
import { reactive, onMounted, ref, defineEmits, watchEffect, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { rou } from "@/page/index";
import { RouterFor } from "@/tools/function";
import {
  MailOutlined,
  QqOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";

const { proxy } = useCurrentInstance();
const { userObject } = storeToRefs(userConten());

let num = ref("");
const router = useRouter();
const route = useRoute();
let $emit = defineEmits(["onRouter"]);
let listBook = reactive({
  list: [],
}) as any;
let selectedKeys = ref([]);
function handleClick() {}
function attend() {}
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
  list: [] as any,
});

// 菜单接口请求
function Menu() {
  return proxy?.$ajax("/api/menu/getMenu", "", {}, async function (res: any) {
    userConten().userMenu = res.menus;
    let accident = await RouterFor(res.menus);
    listInfo.list = accident as any;
    return listInfo.list;
  });
}

// 监听标签切换改版颜色和路由
watch(route, (newValue, oldValue) => {
  num.value = newValue.path;
});

// 根据url刷新默认选中第一个路由
async function approve() {
  await Menu();
  // 如果说第一次路由上有合适的路由直接匹配选中
  // if (route.path) {
  //   num.value = route.path;
  //   for (let i = 0; i < listInfo.list.length; i++) {
  //     if (route.path == listInfo.list[i].path) {
  //       bookList.list = ref([listInfo.list[i]]);
  //     }
  //   }
  //   bookObject.value = bookList.list[0];
  // }
}
onMounted(() => {
  approve();
});
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
