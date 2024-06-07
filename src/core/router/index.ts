import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsLayout from '@/core/infra/layouts/TabsLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: TabsLayout,
    children: [
      {
        path: '',
        component: () => import('@/core/infra/views/HomeView.vue')
      },
      {
        path: 'user',
        component: () => import('@/auth/infra/views/UserView.vue')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/auth/infra/views/LoginView.vue')
  },
  {
    path: '/register',
    component: () => import('@/auth/infra/views/RegisterView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/core/infra/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router