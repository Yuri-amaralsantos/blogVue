import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ArticleDetails from '../pages/ArticleDetails.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/article/:id', name: 'ArticleDetails', component: ArticleDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
