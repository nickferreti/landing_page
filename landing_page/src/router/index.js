import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Designs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Designs',
    name: 'Designs',
    component: HomeView
  },
  {
    path: '/Sobre',
    name: 'Sobre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sobre.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
