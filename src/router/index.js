import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'MainApp' },
  // { path: '/dev', component: 'DevApp' },
]
const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})
Vue.use(Router)
export default new Router({
  routes,
  mode: 'history'
})