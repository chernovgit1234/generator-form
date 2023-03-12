import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form',
    name: 'ready-form',
    component: () => import('../components/ThisReadyForm.vue')
  },
  {
    path: '/test1',
    name: 'test1',
    component: () => import('../components/ThisTest1.vue')
  },
  {
    path: '/test2',
    name: 'test2',
    component: () => import('../components/ThisTest2.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
