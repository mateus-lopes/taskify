import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsLayout from '@/views/TabsLayout.vue'

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
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: 'user',
        component: () => import('@/views/UserView.vue')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
