import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products',
    component: Products
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/cart.vue')
  },
  {
    path: '/stairnav',
    name: 'stairnav',
    component: () => import(/* webpackChunkName: "stairnav" */ '../views/stair-nav.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
