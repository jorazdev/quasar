import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageView from '../views/PageView.vue'
import DateView from '../views/date/DateView.vue'
import GridView from '../views/grid/GridView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'app',
      component: () => import('../layout/LayoutView.vue'),
      redirect: '/app/icon',
      children: [
        {
          path: '/app/icon',
          component: () => import('../views/app/icon/IconView.vue'),
          name: 'icon',
          meta: { requiresAuth: true }
        },
      ]
    },
    {
      path: '/',
      name: 'route',
      component: () => import('../layout/QuLayout.vue'),
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/page',
          name: 'page',
          component: PageView
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/date',
          name: 'date',
          component: DateView
        },
        {
          path: '/grid',
          name: 'grid',
          component: GridView
        },
        {
          path: '/checkbox',
          name: 'checkbox',
          component: () => import('../views/checkbox/CheckBox.vue')
        },
      ]
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../layout/QuLayout.vue'),
      redirect: '/components/avatar',
      children: [
        {
          path: '/components/avatar',
          name: 'avatar',
          component: () => import('../views/components/AvatarView.vue')
        },
      ]
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('../layout/QuLayout.vue'),
      redirect: '/forms/date',
      children: [
        {
          path: '/forms/date',
          name: 'dateForm',
          component: () => import('../views/forms/DateView.vue')
        },
      ]
    }
  ]
})

export default router
