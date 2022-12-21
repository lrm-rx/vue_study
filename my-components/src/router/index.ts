import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Loyout from '@/components/layout/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Loyout,
    children: [
      {
        path: '/',
        redirect: '/selectIcon',
        component: ()=>import('@/views/home.vue')
      },
      {
        path: '/selectIcon',
        component: ()=>import('@/views/selectIcon/index.vue')
      },
      {
        path: '/selectArea',
        component: ()=>import('@/views/selectArea/index.vue')
      },
      {
        path: '/trend',
        component: ()=>import('@/views/trend/index.vue')
      },
      {
        path: '/notification',
        component: ()=>import('@/views/notification/index.vue')
      },
      {
        path: '/menu',
        component: ()=>import('@/views/menu/index.vue')
      },
      {
        path: '/progress',
        component: ()=>import('@/views/progress/index.vue')
      },
      {
        path: '/selecttime',
        component: ()=>import('@/views/selectTime/index.vue')
      },
      {
        path: '/selectcity',
        component: ()=>import('@/views/selectCity/index.vue')
      },
      {
        path: '/form',
        component: ()=>import('@/views/form/index.vue')
      },
      {
        path: '/modelform',
        component: ()=>import('@/views/modelForm/index.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router;