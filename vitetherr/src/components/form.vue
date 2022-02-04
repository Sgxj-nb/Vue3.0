<template>
  <div>asdasldlkasjlkdljka</div>
  <div>
    {{ profileStore.usermessage }}
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/store/index";
import { reactive, ref } from "vue";

const profileStore = useCounterStore();
</script>

<style scoped lang="scss"></style>
