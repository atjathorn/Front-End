import Vue from 'vue'
import VueRouter from 'vue-router'
import Courese from '../views/Courese.vue'
import Home from '../views/Home.vue'
import Jobs from '../views/Jobs.vue'
import Solution from '../views/Solution.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/solution',
    name: 'Solution',
    component: Solution,
  },
  {
    path: '/courese',
    name: 'Courese',
    component: Courese,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.replace({ path: '/courese', redirect: '/' })
export default router
