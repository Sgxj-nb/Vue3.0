<template>
  <div>
    <div class="bookPage">
      <ul v-if="bookList.list.length > 0">
        <li
          class="page-hover"
          v-for="(d, index) in bookList.list"
          :key="d.name"
          @click="onBook(d, index)"
          @mousemove="onMousemove(d, index)"
          :style="[
            { color: numCopy == d.path ? '#fff' : '' },
            { backgroundColor: numCopy == d.path ? '#5578ff' : '' },
          ]"
        >
          <span></span> <span>{{ d.name }}</span>
          <span @click.stop="onDel(d, index)" class="icon"
            ><close-outlined v-if="numCopy !== d.path"
          /></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { rou } from "@/page/index";
import { bookList, onRemote, bookObject, onChange } from "@/tools/function";
import CloseOutlined from "@ant-design/icons-vue/CloseOutlined";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
let book = bookList.list;
let num = ref(-1);
let numCopy = ref("");

// 鼠标删除标签事件
function onDel(d: rou, index: number) {
  onRemote(d, index);
}

//  鼠标事件
function onMousemove(d, index: any) {
  num.value = index;
}
function mouseout() {
  num.value = -1;
}
// 标签点击事件
function onBook(d: rou, index: number) {
  numCopy.value = d.path;
  onChange(d, true);
  router.push(d.path);
}

// 监听点击当前值选中颜色变化
watch(bookObject, (newValue: rou, oldValue) => {
  numCopy.value = newValue.path;
});
</script>

<style scoped>
.page-hover:hover .icon {
  color: #333;
}
.page-hover:hover {
  background-color: #dde0ec;
}
.bookPage {
  background-color: #fff;
  height: 40px;
  display: flex;
}
ul {
  padding: 0;
  display: flex;
  width: 100%;
}
ul li {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0px 10px 0px 10px;
  list-style: none;
  /* border: 1px solid red; */
  cursor: pointer;
}
ul li > span:nth-child(1) {
  margin: 0px 12px 0px 0px;
  overflow: hidden;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  display: inline-block;
  background-color: #5578ff;
}
.icon {
  width: 20px;
  color: transparent;
  padding-left: 10px;
  display: inline-block;
  font-size: 11px;
}
</style>
