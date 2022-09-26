<template>
  <div>
    <div class="bookPage">
      <ul v-if="book.length > 0">
        <li v-for="d in book" :key="d.name">
          <span></span> {{ d.name }}
          <span class="icon"><close-outlined /></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { bookList, list } from "@/tools/function";
import CloseOutlined from "@ant-design/icons-vue/CloseOutlined";

let book: list = bookList.list;
</script>

<style scoped>
.bookPage {
  background-color: #fff;
  height: 40px;
  /* border: 1px solid red; */
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
  padding: 0px 20px 0px 20px;
  list-style: none;
  border: 1px solid red;
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
  padding-left: 5px;
  display: inline-block;
  font-size: 11px;
}
</style>
