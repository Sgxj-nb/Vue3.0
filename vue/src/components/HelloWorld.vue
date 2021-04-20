<template>
  <div>用户登陆</div>
  <div>
    <el-form :model="loginForm" ref="loginFormRef" :rules="loginRules" autocomplete="on">
      <el-form-item label="用户名" prop="username">
        <el-input
          ref="userNameRef"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          ref="passwordRef"
          v-model="loginForm.password"
          :type="passwordType"
          name="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-button type="primary" :loading="loading" @click="handleLogin">登录信息</el-button>
    </el-form>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, toRefs } from 'vue'
  import { useRoute, useRouter } from 'vue-router' // 导入router
  import store from '@/store'
  export default defineComponent({
    name: 'App',
    setup() {
      // 表单定义
      const userNameRef = ref(null)
      const passwordRef = ref(null)
      const loginFormRef = ref(null)
      const router = useRouter()
      const route = useRoute()
      const state = reactive({
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{ required: true, message: '值不能为空', trigger: 'blur' }],
          password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
        },
        passwordType: 'password',
        loading: false,
        showDialog: false,
        capsTooltip: false,
        redirect: '',
        otherQuery: {}
      })

      // 登陆校验
      function handleLogin() {
        ;(loginFormRef.value as any).validate(async (valid: boolean) => {
          if (valid) {
            state.loading = true
            await store.commit('infotoken')
            console.log(state.loginForm) // 值
            
            router.push('/home')
            setTimeout(() => {
              state.loading = false
            }, 1000)
          } else {
            return false
          }
        })
      }
      return {
        userNameRef,
        passwordRef,
        loginFormRef,
        handleLogin,
        // 把reactive创建出来的响应式对象，转换成普通对象，只不过对象上的每个属性节点都是ref类型的ref响应式数据
        ...toRefs(state) // 把state上的每一个属性 都转换成ref形式的响应式数据
      }
    }
  })
</script>
