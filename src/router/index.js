import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home/Home'
import Layout from 'comps/Layout/Layout'
import ErrorPage from 'views/Error/404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/error',
    name: 'Error',
    component: ErrorPage
  },
  {
    path: '*',
    name: 'Error',
    component: ErrorPage
  }
]

const router = new VueRouter({
  routes
})

export default router
