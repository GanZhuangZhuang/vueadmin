<template>
  <div class="login">
    <el-form :model="loginForm" :rules="loginRules" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密&nbsp;&nbsp;&nbsp;&nbsp;码" prop="password">
        <el-input v-model="loginForm.password" type="password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input class="auth" v-model="loginForm.code" />
        <img :src="imgCodeUrl" alt="正在加载" class="codeImg" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin" @keyup.enter="onLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCaptcha, getLogin } from '@/api/login'
const router = useRouter()
/**
 * @描述 表单数据对象
 */
const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})
// 验证码图片地址
const imgCodeUrl = ref('')
// 用户名验证规则
const validateUsername = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  }
}
// 密码验证规则
const validatePassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (value.length < 6) {
    callback(new Error('密码不能少于6位'))
  }
}
// 验证码验证规则
const validateCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else if (value.length !== 5) {
    callback(new Error('验证码为5个字符'))
  }
}
/**
 * @描述 表单验证规则
 */
const loginRules = {
  username: [
    {
      required: true,
      trigger: 'blur',
      validator: validateUsername
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword
    }
  ],
  code: [
    {
      required: true,
      trigger: 'blur',
      validator: validateCode
    }
  ]
}
/**
 * @描述 登录事件
 */
const onLogin = async () => {
  try {
    await getLogin(loginForm)
    await router.push('/layout')
  } catch (error) {
    console.log(error)
  }
}
/**
 * @描述 获取验证码事件
 */
const getImgCode = async () => {
  const res = await getCaptcha()
  loginForm.token = res.token
  imgCodeUrl.value = res.captchaImg
}
getImgCode()
</script>
<style lang="scss" scoped>
.login {
  height: 100%;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;

  .demo-ruleForm {
    padding: 50px;
    width: 400px;

    .codeImg {
      width: 120px;
      height: 40px;
      border: 1px solid #000;
      border-radius: 5px;
    }
  }
  .elButton {
    position: absolute;
    top: 0;
    left: 50px;
    width: 80px;
  }
  .auth {
    width: 180px;
    margin-right: 20px;
  }
}
</style>
