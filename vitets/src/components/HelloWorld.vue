<template>
  <div>
    <button @click="add">sss</button>
    {{ count }}
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import request from '../utils/request';
defineProps<{ msg: string }>();
const count = ref(0);
function add() {
  request
    .post('user.list', { user_name: 'admin', user_password: '123456' })
    .then((res) => {
      console.log(res);
    });
}
</script>
