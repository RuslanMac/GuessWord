import Vue from 'vue'
import VueRouter from 'vue-router'
import WordPage from '../views/WordPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WordPage',
    component: WordPage
  },
]

const router = new VueRouter({
  routes
})

export default router
