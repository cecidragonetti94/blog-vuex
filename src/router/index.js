import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 
  {
    path: '/form',
    name: 'Form',
  
    component: () => import('../views/Form.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
  
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/blog/:id',
    name: 'Article',
  
    component: () => import('../views/Article.vue')
  },
  {
    path: '/count',
    name: 'Count',
  
    component: () => import('../views/Count.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
