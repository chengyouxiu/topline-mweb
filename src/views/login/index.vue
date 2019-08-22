<template>
  <div>
    <van-nav-bar title="登录" />
    <van-cell-group>
     <van-field
        v-model="user.mobile"
        clearable
        label="手机"
        v-validate="'required'"
        placeholder="请输入手机号"
        name="mobile"
        :error-message="errors.first('mobile')"
      />
      <van-field
        v-model="user.code"
        type="password"
        label="验证码"
        v-validate="'required'"
        placeholder="请输入验证码"
        :error-message="errors.first('code')"
        name="code"
      />
    </van-cell-group>
     <!-- <span> {{ errors.first('mobile') }} </span> -->
    <div class="login-btn">
      <van-button type="info" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import { login } from '@/api/user'
export default {
  name: 'loginIndex',
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      }
    }
  },
  methods: {
    async onLogin () {
      try {
        const { data } = await login(this.user)
        console.log(data)
        // 跳转到首页
        // this.$router.push({ name: 'home' })
      } catch (err) {
        if (err.response && err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
          // console.log(err)
        }
      }
    }
  }
}
</script>
<style scoped lang="less" >
    .login-btn {
      padding: 20px;
      .van-button {
         width: 100%;
         border-radius: 4px;
  }
    }
</style>
