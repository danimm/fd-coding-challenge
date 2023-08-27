import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      redirect: { path: '/watches' },
      children: [],
      component: () => import('@/views/index.vue')
    },
    {
      name: 'Watches',
      path: '/watches',
      component: () => import('@/views/watches/index.vue')
    },
    {
      name: 'Watch',
      path: '/watches/:id',
      props: true,
      component: () => import('@/views/watches/[sku]/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      children: [],
      redirect: '/watches',
      component: () => import('@/views/404.vue')
    }
  ]
})

export default router
