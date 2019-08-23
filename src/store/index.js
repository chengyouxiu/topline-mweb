import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/utils/user' // 使用到所有成员用* 使用一两个时按需加载有利于打包结果优化
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: user.getUser()
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了刷新保持数据状态所以也要往本地存储放一下
      user.saveUser(state.user)
    }
  },
  actions: {

  }
})
