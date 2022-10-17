<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="large"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form__header">
        <p>管理后台</p>
      </div>
      <el-form-item prop="account">
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <el-icon class="el-input__icon">
              <User />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="user.pwd"
          type="password"
          placeholder="请输入密码"
        >
          <template #prefix>
            <el-icon class="el-input__icon">
              <Lock />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="imgcode-wrap">
          <el-input
            v-model="user.imgcode"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <el-icon class="el-input__icon">
                <Key />
              </el-icon>
            </template>
          </el-input>
          <img
            class="imgcode"
            alt="验证码"
            :src="captchaSrc"
            v-if="captchaSrc"
            @click="loadCaptcha"
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { getCaptcha, login } from '@/api/common'
import router from '@/router'
import { useStore } from '@/store'
import type { IElForm, IFormRule } from '@/type/element-plus'
import { ElForm } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const userStore = useStore()
const captchaSrc = ref('')
const form = ref<IElForm | null>(null)
const user = reactive({
  account: 'admin',
  pwd: '123456',
  imgcode: ''
})
const loading = ref(false)
const rules = ref<IFormRule>({
  account: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  imgcode: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})

const handleSubmit = async () => {
  // 表单验证
  const valid = await form.value?.validate()
  if (!valid) {
    return false
  }

  // 验证通过，展示 loading
  loading.value = true

  // 请求登录
  const data = await login(user).finally(() => {
    loading.value = false
  })
  router.replace({ name: 'home' })

  // 存储登录用户信息
  userStore.setUserInfo({
    ...(data as any).user_info,
    token: data.token
  })

  // 跳转回原来页面
  let redirect = route.query.redirect || '/'
  if (typeof redirect !== 'string') {
    redirect = '/'
  }
  router.replace(redirect)
}

const loadCaptcha = async () => {
  const data = await getCaptcha()
  captchaSrc.value = URL.createObjectURL(data)
}

onMounted(() => {
  loadCaptcha()
})

</script>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    .imgcode {
      height: 37px;
    }
  }
}
</style>
