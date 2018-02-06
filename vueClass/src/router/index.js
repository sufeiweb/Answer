import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Home from '@/page/homeMain'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Login', component: Login},
    {path: '/home', name: 'Home', component: Home}
  ]
})
