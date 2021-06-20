<template>
  <!-- 模板首页登陆 -->
  <div>
    <el-card>
      <div>
        <div>模板首页界面</div>
      </div>
      <div>
        <el-form :model="queryinfo">
          <el-form-item label="">
            <el-input v-model="queryinfo.info.name" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input
              v-model="queryinfo.info.password"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="add">Log</el-button>
      </div>
    </el-card>
  </div>

  <div v-for="(d, index) in queryinfo.showinfo" :key="index">
    {{ d.name }}
  </div>

  <!-- 测试组件传值 -->
  <div>
    <Hie @shiwinfo="shiwinfo" :numaaa="num"></Hie>
  </div>
  <div>
    {{ num }}
  </div>
</template>
<script lang="ts">
import Hie from './views/Home.vue';
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    Hie
  },
  setup() {
    let queryinfo: any = reactive({
      info: {
        name: '',
        password: ''
      },
      showinfo: [
        { name: '数组1' },
        { name: '数组1' },
        { name: '数组1' },
        { name: '数组1' },
        { name: '数组1' }
      ]
    });
    function add() {
      queryinfo.info = {};
    }
    let num = ref(0);
    function shiwinfo(e: any) { // 捕获子组件点击事件传递过来的值
      num.value = e.name; // 通过点击事件传值去子组件
      console.log(num.value);
    }

    return {
      queryinfo,
      add,
      shiwinfo,
      num
    };
  }
});
</script>
