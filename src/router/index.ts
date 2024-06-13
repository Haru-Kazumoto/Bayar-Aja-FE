import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      children: [
        {
          path: 'login',
          name: "auth.login",
          component: LoginView
        },
        {
          path: 'register',
          name: "auth.register",
          component: () => import('@/views/auth/RegisterView.vue')
        }
      ]
    },
    {
      path: '/admin',
      children: [
        {
          path: 'dashboard',
          name: "admin.dashboard",
          component: () => import('@/views/admin/DashboardView.vue')
        }
      ]
    }
  ]
})

export default router
