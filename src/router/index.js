import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favor',
      name: 'favor',
      component: () => import('../views/FavorView.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/MessageView.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/views/city/CityView.vue'),
      meta: {
        isShowTab: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search/searchView.vue'),
      meta: {
        isShowTab: true
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/detail/DetailView.vue'),
      meta: {
        isShowTab: true
      }
    },
  ]
})

export default router
