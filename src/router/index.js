import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Articles from '../components/Articles.vue'
import Article from '../components/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/articles',
    children: [{
      path: '/articles',
      component: Articles
    },
    {
      path: '/article',
      component: Article
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
