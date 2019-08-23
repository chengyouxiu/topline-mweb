<template>
  <div>
    <van-nav-bar title="标题"/>
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        required
        clearable
        label="手机"
        v-validate="'required'"
        placeholder="请输入手机号"
        name="moblie"
        :error-message="errors.first('moblie')"
      />

      <van-field
        v-model="user.code"
        type="password"
        label="验证码"
        v-validate="'required'"
        placeholder="请输入验证码"
        :error-message="errors.first('验证码')"
        name="验证码"
        required
      />
    </van-cell-group>

    <div class="login-btn">
      <van-button type="info" :loading="isLoginLoading" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>

import { login } from '@/api/user'
import { mapMutations } from 'vuex'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '15027924165',
        code: '246810'
      },
      isLoginLoading: false
    }
  },
  created () {
    this.customValidateMessage()
  },
  methods: {
    ...mapMutations(['setUser']),
    async onLogin () {
      try {
        const isValid = await this.$validator.validate()
        if (!isValid) {
          return
        }

        // 提交表单，让登陆按钮 loading
        this.isLoginLoading = true

        const { data } = await login(this.user)

        console.log(data)
        this.setUser(data.data)

        // 跳转到首页
        // this.$router.push({ name: 'home' })

        // 登陆成功，关闭 loading
        this.isLoginLoading = false
      } catch (err) {
        if (err.response && err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        }
      }

      // 无论登陆成功还是失败，都要把 loading 停止
      this.isLoginLoading = false
    },
    // 自定义校验规则
    customValidateMessage () {
      const dict = {
        custom: {
          moblie: {
            required: '请输入手机号'
          }
        }
      }
      this.$validator.localize('zh_CN', dict)
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn {
  padding: 20px;
  .van-button {
    width: 100%;
  }
}
</style>
