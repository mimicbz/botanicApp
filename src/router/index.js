import { createRouter, createWebHistory } from 'vue-router'

import { createAuthGuard } from "@auth0/auth0-vue";
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Search from '../views/Search.vue'
import Plant from '../views/Plant.vue'
import Favorites from '../views/Favorites.vue'
import Auth from '../views/Auth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: createAuthGuard(app)
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      beforeEnter: createAuthGuard(app)
    },
    {
      path: '/plant/:plantId',
      name: 'plant',
      component: Plant,
      beforeEnter: createAuthGuard(app)
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites,
      beforeEnter: createAuthGuard(app)
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      beforeEnter: createAuthGuard(app)
    },
  ]
})

export default router
