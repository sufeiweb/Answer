// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'animate.css'

Vue.config.productionTip = false

import axios from 'axios';//引入axios组件
// axios.defaults.withCredentials=true;  //跨域保存session有用
// Vue.prototype.$API_BASE="http://localhost:3333";//打包的时候直接删掉，默认基础路径在这里配置
axios.defaults.baseURL = "http://localhost:4444"; //打包的时候直接删掉，默认基础路径在这里配置
//将 axios 赋值给 Vue，方便在子组件里面使用
Vue.prototype.$reqs = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
