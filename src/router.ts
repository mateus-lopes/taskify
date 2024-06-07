import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsLayout from './TabsLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/',
    component: TabsLayout,
    children: [
      {
        path: '',
        component: () => import('@/HomeView.vue')
      },
      {
        path: 'user',
        component: () => import('./UserView.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
