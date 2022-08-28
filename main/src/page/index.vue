<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { userConten } from "@/pinia/index";
const { userObject } = storeToRefs(userConten());
</script>

<template>
  <div>{{ userObject }}</div>
</template>

<style scoped></style>
