import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Container from '@/components/container/src/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: ()=>import('@/views/home.vue')
      },
      {
        path: '/selectIcon',
        component: ()=>import('@/views/selectIcon/index.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router;