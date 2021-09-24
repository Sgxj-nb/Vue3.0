<template>
  <div>
    <div v-for="(d, index) in info.info" :key="index" @click="add(d)">
      {{ d.name }}
    </div>
  </div>

  <div>我是父组件传过来的值-{{ numaaa }}</div>
  <!-- 子组件调取父组件的方法 -->
  <div>
    <el-button type="primary" @click="names">我是子组件</el-button>
  </div>
  <!-- 跳转组件界面 -->
  <div>
    <div>
      <el-button type="primary" @click="addzujian">跳转组件界面</el-button>
    </div>
  </div>

  <!-- vuex界面 -->
  <div>
    <div>
      <el-button type="primary" @click="addvuex">跳转vuex</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { mallGoodsDetailAPI } from '../utils/request';
import { reactive, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'App',
  props: {
    numaaa: {
      type: String
    }
  },
  methods: {},
  setup(props, context) {
    const tz = useRouter();
    // 接口请求演示(局部)
    function xuanran() {
      mallGoodsDetailAPI({ group_id: '1' }).then((res: any) => {
        console.log(res);
      });
    }
    // xuanran();
    console.log(props.numaaa); // 父组件传值过来的值我来呈现
    let info = reactive({
      info: [{ name: '2' }, { name: '3' }]
    });
    // ========================================================================4

    let num = ref(0);
    let showifo = reactive({
      num
    });

    // 通过点击事件来传值去父组件
    function add(e: any) {
      context.emit('shiwinfo', { name: e.name });
    }
    // 调取父组件的方法
    function names() {
      context.emit('namess');
    }

    // 父组件调取的事件
    function adinfo() {
      console.log('我是子组件', '我被父组件调用');
    }

    // 跳转到组件界面
    function addzujian() {
      tz.push('/views/zujian');
    }
    function addvuex() {
      tz.push('/views/vuex');
    }
    return {
      addvuex,
      info,
      addzujian,
      add,
      names,
      adinfo
    };
  }
});
</script>
