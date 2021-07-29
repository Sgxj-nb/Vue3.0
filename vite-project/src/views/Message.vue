<template>
  <!-- 数据呈现界面 -->
  <div>
    {{ listinfo.addshowinfo.activity_count }}
    {{ listinfo.addshowinfo.cash_count }}
    {{ listinfo.addshowinfo.group_count }}
    {{ listinfo.addshowinfo.withdraw_count }}
    {{ listinfo.addshowinfo.user_count }}
  </div>

  <!-- 时间过滤器 -->
  <div>
    {{ $fliter(1626510408) }}
  </div>

  <!-- md5加密 -->
  <div>
    <div>
      {{ $hex_md5(88888888888888) }}
    </div>
  </div>
</template>
<script lang="ts">
import { Qufi } from '../utils/request';
import { computed, defineComponent, reactive, ref } from 'vue';
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

    // 复习数组的用法
    function infoasdw() {
      /**
       * @splice
       * */
      // 删除第几个数组
      let a = [1, 2, 3, 4, 5];
      a.splice(1);
      console.log('我删除的数据', a);

      // 替换
      let c: any = [1, 12, 3, 4, 5];
      c.splice(1, 4, 'x', 'w', 'x', 's');
      console.log('我替换后的数组', c);

      // 插入
      let s = [1, 23, 45, 66, 7, 89];
      s.splice(1, 0, 2, 3, 4);
      console.log('我插入的数组', s);

      /**
       * @split
       * */
      // 对于很特殊的数组处理的方案 截取name参数里面所有带有||的参数，默认截取两次
      let i: any = [{ name: 'infasdadw,       ||22222222222222' }];
      i = i[0].name.split('||', 2)[0];
      console.log('我截取数组', i);
    }
    infoasdw();
    let showinfo = ref(1);

    // =======================================================================
    const plusOne = computed({
      get: () => showinfo.value + 1,
      set: (value) => {
        showinfo.value = value - 1;
      }
    });

    console.log((plusOne.value = 1));

    return {
      listinfo
    };
  }
});
</script>
