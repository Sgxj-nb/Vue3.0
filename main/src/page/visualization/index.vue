<script setup lang="ts">
import { ref } from "vue";
function onFile(): void {
  let info = document.getElementById("info");
  if (info) {
    info?.click();
    info.addEventListener("focus", function (e) {
      console.log("focus", e);
    });

    info.addEventListener("mousedown", function (e) {
      console.log("focus", e);
    });

    info.addEventListener("mouseup", function (e) {
      console.log("focus", e);
    });

    info.addEventListener("input", function (e) {
      console.log("focus", e);
    });

    info.addEventListener("change", function (e) {
      // console.log(e.target.files[0]);
      // e.target.value = "";
    });

    info.addEventListener("blur", function (e) {
      // e.target.value = null;
      console.log("focus", e);
    });
  }
}
</script>
<template>
  <input style="display: none" type="file" id="info" />
  <div @click="onFile">上传</div>
</template>
<style scoped></style>
