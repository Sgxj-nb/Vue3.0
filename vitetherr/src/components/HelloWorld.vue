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
    <button @click="out">清空信息</button>
    <button @click="addpush">跳转</button>
  </div>
  <div class="info">
    用户信息
    {{ profileStore.usermessage }}
  </div>
  <div>
    <Button size="large" type="primary">主要按钮</Button>
  </div>
  <div>
    <Rate :size="25" v-model="info"></Rate>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { loag } from '@/api/index';
import { useCounterStore } from '@/store/index';
import { set_tokennfo } from '@/config/token';
import { useRouter } from 'vue-router';

import { Button, Toast, Rate } from 'vant';

let info = ref(3);

const profileStore = useCounterStore();
const router = useRouter();
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
  user_name: 'admin',
  user_password: '123456',
  remember: true
});

// 登录事件
function add() {
  let frominfo: any = new FormData();
  for (let i in from) {
    frominfo.append(i, from[i as keyof typeof meiju]);
  }
  loag(frominfo)
    .then((res) => {
      console.log(res);
      if (res.data.code == 0) {
        set_tokennfo(res.data.data.token);
        profileStore.messageinfo();
      }
    })
    .catch((error) => {
      console.log(222, error);
    });
}

// 清空本地值
function out() {
  Toast.success('对的');
  profileStore.removeoutuser();
}

// 跳转
function addpush() {
  router.push('/xxxx');
}
</script>

<style scoped lang="scss">
.info {
  font-size: 15px;
}
</style>
