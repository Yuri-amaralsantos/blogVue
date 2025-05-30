import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import Post from '../pages/Post.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/post/:slug', component: Post }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
