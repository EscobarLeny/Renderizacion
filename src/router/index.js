import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vit from '../views/Vit.vue'
import Vfor from '../views/Vfor.vue'
import Vnodel from '../views/Vnodel.vue'
import Von from '../views/Von.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/von',
    name: 'Von',
    component: Von
  },
  {
    path: '/vnodel',
    name: 'vnodel',
    component: Vnodel
  },
  {
    path: '/vfor',
    name: 'vfor',
    component: Vfor
  },
  {
    path: '/vit',
    name: 'vit',
    component: Vit
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
