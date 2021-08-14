<template>
  <!-- 表单校验 -->
  <div>
    <div>
      <el-form :model="uploadFormData" :rules="rules" ref="uploadForm">
        <el-form-item label="账号" prop="name">
          <el-input v-model="uploadFormData.name" placeholder="qq"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="code">
          <el-input v-model="uploadFormData.code" placeholder="mm"></el-input>
        </el-form-item>
        <el-form-item label="上传">
          <el-upload
            :data="passwinfo"
            :on-success="successundata"
            action="http://upload-z2.qiniup.com"
            class="upload-demo"
            :before-upload="beforeupload"
            name="file"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <template #tip>
              <div class="el-upload__tip">
                只能上传 jpg/png 文件，且不超过 500kb
              </div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="单选">
          <el-radio v-model="uploadFormData.ra1" label="第一个"></el-radio>
          <el-radio v-model="uploadFormData.ra2" label="第二个"></el-radio>
        </el-form-item>
        <el-form-item label="复选框">
          <el-checkbox v-model="uploadFormData.checkbox"
            >我是复选框</el-checkbox
          >
        </el-form-item>
        <el-form-item label="下拉选择器">
          <el-select v-model="uploadFormData.select" placeholder="请选择">
            <el-option
              v-for="(d, index) in listshowinfpasdwd.name"
              :key="index"
              :label="d.name"
              :value="d.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="下拉选择器(多选)">
          <el-select
            multiple
            filterable
            allow-create
            default-first-option
            v-model="uploadFormData.select2"
            placeholder="请选择"
          >
            <el-option
              v-for="(d, index) in listshowinfpasdwd.name"
              :key="index"
              :label="d.name"
              :value="d.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间选择器">
          <el-date-picker
            v-model="uploadFormData.date"
            @change="changedata"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="滑块校验">
          <el-switch
            v-model="uploadFormData.switch"
            active-value="1"
            inactive-value="0"
          ></el-switch>
        </el-form-item>
        <el-button type="primary" @click="add">提交</el-button>
      </el-form>
    </div>
  </div>

  <div>
    <div>
      <el-table :data="showlist.name">
        <el-table-column label="第一个" prop="names"> </el-table-column>
        <el-table-column label="第二个" prop="names"> </el-table-column>
        <el-table-column label="第三个" prop="names"> </el-table-column>
        <el-table-column label="操作" slot="scope">
          <template #default="scope">
            <el-button
              type="primary"
              @click="addasdadada(scope.$index, scope.row)"
              >点我</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div v-if="dialogMediaVisible">
      <Dlp
        :formdata="uploadFormData"
        @quxiao="quxiao"
        v-model:visible="dialogMediaVisible"
      ></Dlp>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, reactive, defineComponent, toRef, toRefs } from 'vue';
import { login, un } from '../utils/request';
import Dlp from '../components/dol.vue';
export default defineComponent({
  name: 'App',
  components: {
    Dlp
  },
  setup() {
    const uploadObj = {
      name: '',
      code: '',
      mobile: '',
      img: '',
      ra1: '第一个',
      ra2: '',
      checkbox: false, // 复选框默认不选中
      select: '',
      select2: [],
      date: '',
      switch: ''
    }; // 新增组别表单包含的参数
    const uploadFormData = ref({ ...uploadObj }); // 新增组别表单的信息
    const uploadForm = ref(); // 新增组别表单 DOM
    // 新建表单规则
    let rules = ref({
      name: [{ required: true, message: '请输入组别ID', trigger: 'blur' }],
      code: [{ required: true, message: '请输入组别ID', trigger: 'blur' }]
    });
    /**
     * @上传前
     */
    let passwinfo = reactive({
      key: '',
      token: '',
      host: ''
    });
    function fileName(name: any) {
      var date = new Date();
      return (
        date.getFullYear() +
        '/' +
        (date.getMonth() + 1) +
        '/' +
        date.getDate() +
        '/' +
        name.uid +
        name.name.substring(name.name.lastIndexOf('.'))
      );
    }
    //上传前
    function beforeupload(file: any) {
      passwinfo.key = fileName(file);
      return new Promise((resasd, error) => {
        un({}).then((res: any) => {
          if (res.code == 0) {
            passwinfo.token = res.data.token;
            passwinfo.host = res.data.host;
            resasd(res.data);
          } else {
            error(false);
          }
        });
      });
    }
    // 上传成功
    function successundata(ress: any, res: any) {
      console.log('我是成功的值', res, ress);
      uploadFormData.value.img = passwinfo.host + ress.key;
      //
    }
    // ==================================================================
    // 提交事件
    function add() {
      console.log(uploadFormData.value);
      uploadForm.value.validate((value: any) => {
        if (value) {
          // 请求接口代值
          login(uploadFormData.value).then((res: any) => {
            console.log(res);
          });
        } else {
          return false;
        }
      });
    }
    // 表单下拉框
    let listshowinfpasdwd = reactive({
      name: [
        {
          name: '1'
        },
        {
          name: '2'
        },
        {
          name: '3'
        }
      ]
    });

    // 时间选择器表单事件
    function changedata(e: any) {
      let time: any = new Date().getTime() / 1000;
      console.log(time);
    }

    let showlist = reactive({
      name: [{ names: 'xxxx' }]
    });
    let dialogMediaVisible: any = ref(false);
    // 表格传值
    function addasdadada(e: any, es: any): void {
      console.log(e, es.names); // 表格获取的值
      dialogMediaVisible.value = true;
    }
    function quxiao() {
      dialogMediaVisible.value = false;
    }
    return {
      quxiao,
      dialogMediaVisible,
      addasdadada,
      showlist,
      changedata,
      listshowinfpasdwd,
      uploadFormData,
      passwinfo,
      successundata,
      add,
      rules,
      uploadForm,
      beforeupload
    };
  }
});
</script>
