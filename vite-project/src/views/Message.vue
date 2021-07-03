<template>
  <!-- 数据呈现界面 -->
  <div>
    {{ listinfo.addshowinfo.activity_count }}
    {{ listinfo.addshowinfo.cash_count }}
    {{ listinfo.addshowinfo.group_count }}
    {{ listinfo.addshowinfo.withdraw_count }}
    {{ listinfo.addshowinfo.user_count }}
  </div>

  <!-- 修改 -->
  <div>
    <div></div>
  </div>
</template>
<script lang="ts">
import { Qufi } from '../utils/request';
import { defineComponent, reactive } from 'vue';
import { ElMessage } from 'element-plus';
export default defineComponent({
  name: 'App',
  setup() {
    // 首页查询数据
    let listinfo = reactive({
      addshowinfo: {}
    });

    function Qufis() {
      Qufi({}).then(function (res: any) {
        console.log(res);
        if (res.code == 200) {
          ElMessage.success('获取成功');
          listinfo.addshowinfo = res.data;
        }
      });
    }
    Qufis();

    // 测试数组
    function ifnoa() {
      let a: any = [
        { id: 1, info: 1 },
        { id: 2, info: 1 },
        { id: 3, info: 1 },
        { id: 4, info: 0 },
        { id: 5, info: 0 }
      ];
      let q = [
        { id: 1, info: 0 },
        { id: 2, info: 0 },
        { id: 3, info: 0 },
        { id: 4, info: 0 },
        { id: 5, info: 0 }
      ];

      // 循环第一层变量
      a.forEach(function (resa: any, index: any) {
        // 新建一个键值对来接some返回的布尔值
        a[index].one = q.some(function (res: any, index: any) {
          return resa.info == res.info;
        });

        // 测试数据
      });
      console.log(a);
    }
    ifnoa();

    // 过滤掉里面不是0的数组在返回新数组
    function asdlashdiow() {
      let a: any = [
        { id: 1, info: 1 },
        { id: 2, info: 1 },
        { id: 3, info: 1 },
        { id: 4, info: 0 },
        { id: 5, info: 0 }
      ];
      console.log(a);
      
      a = a.filter((item: any) => {
        return item.info != 0;
      });
      console.log(a);
    }

    asdlashdiow();
    // 获取系统信息
    return {
      listinfo
    };
  }
});
</script>
