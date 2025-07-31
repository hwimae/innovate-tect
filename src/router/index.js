import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../views/Home.vue'
import About from '../../views/About.vue'
import Services from '../../views/Services.vue'
import Contact from '../../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gioi-thieu',
    name: 'About', 
    component: About
  },
  {
    path: '/dich-vu',
    name: 'Services',
    component: Services
  },
  {
    path: '/giai-phap',
    name: 'Solutions',
    component: () => import('../../views/Services.vue') 
  },
  {
    path: '/tin-tuc',
    name: 'News',
    component: () => import('../../views/About.vue') 
  },
  {
    path: '/lien-he',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
