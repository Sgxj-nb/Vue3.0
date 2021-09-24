<template>
  <!-- vuex练习界面 -->
  <div>
    <div>
      <el-button type="primary" @click="add">返回上一页</el-button>
    </div>
  </div>

  <div>
    <div>asdasdasdas</div>
  </div>
  <div>我是Vuex写死的值：{{ info }}</div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router';
import { defineComponent, onMounted, ref } from 'vue';
import store from '../store';
export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter();
    let info = ref(store._state.data.text);
    function add() {
      router.go(-1);
    }
    onMounted(() => {
      console.log(store._state.data.text); // 通过此形式可以拿掉vuex里面的值
    });
    return {
      add,
      info
    };
  }
});
</script>
