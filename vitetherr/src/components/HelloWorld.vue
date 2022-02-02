<template>
  <div>
    <div>
      <input type="text" v-model="from.user_name" name="" id="" />
    </div>
    <div>
      <input type="text" v-model="from.user_password" />
    </div>
  </div>
  <div>
    <button @click="add">确定</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { loag } from '@/api/index';

interface Quaninfo {
  user_name: string;
  user_password: string;
  remember?: Boolean;
}
enum meiju {
  user_name = '',
  user_password = '',
  remember = ''
}

let from: Quaninfo = reactive({
  user_name: '',
  user_password: '',
  remember: true
});

function add() {
  let frominfo: any = new FormData();
  for (let i in from) {
    frominfo.append(i, from[i as keyof typeof meiju]);
  }
  loag(frominfo)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(222);
    });
}
</script>

<style scoped lang="scss"></style>
