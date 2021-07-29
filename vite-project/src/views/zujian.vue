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

        <el-button type="primary" @click="add">提交</el-button>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, reactive, defineComponent, toRef, toRefs } from 'vue';
import { login, un } from '../utils/request';
export default defineComponent({
  name: 'App',
  setup() {
    const uploadObj = { name: '', code: '', mobile: '', img: '' }; // 新增组别表单包含的参数
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
    return {
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
