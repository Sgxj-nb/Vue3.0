<template>
  <!-- vuex练习界面 -->
  <div>
    <div>
      <el-button type="primary" @click="add">返回上一页</el-button>
    </div>
  </div>

  <div></div>
  <div>我是Vuex写死的值：{{ info }}</div>
  <div>vuex拿到的值{{ naem }}</div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router';
import { defineComponent, reactive, onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'App',
  setup() {
    const stores = useStore();
    const router = useRouter();
    let info = ref(stores.state.text);
    function add() {
      router.go(-1);
    }
    function cunzhi() {
      let c: Number = 22266660;
      stores.dispatch('title', c);
    }
    cunzhi();
    onMounted(() => {
      console.log(stores.state.text); // 通过此形式可以拿掉vuex里面的值
    });
    return {
      add,
      info,
      naem: computed(() => stores.state.title) // 获取vuex的值
    };
  }
});
</script>
