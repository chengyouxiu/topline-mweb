import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'
import './styles/index.less'

import VeeValidate, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN' // 加载验证插件的语言包
Vue.use(VeeValidate, {
  events: '' // 禁用默认的事件校验只有js调用才能触发
})
// 注意：这句代码一定要在 Vue.use(VeeValidate) 之后
Validator.localize('zh_CN', zhCN)

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
