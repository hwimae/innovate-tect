import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../views/Home.vue'
import About from '../../views/About.vue'
import Services from '../../views/Services.vue'
import Solutions from '../../views/Solutions.vue'
import SolutionDetail from '../../views/SolutionDetail.vue'
import News from '../../views/News.vue'
import NewsDetail from '../../views/NewsDetail.vue'
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
    component: Solutions
  },
  {
    path: '/giai-phap/:id',
    name: 'SolutionDetail',
    component: SolutionDetail
  },
  {
    path: '/tin-tuc',
    name: 'News',
    component: News
  },
  {
    path: '/tin-tuc/:id',
    name: 'NewsDetail',
    component: NewsDetail
  },
  {
    path: '/:id',
    name: 'PostDetail',
    component: NewsDetail
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
