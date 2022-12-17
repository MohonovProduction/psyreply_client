import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView";
import store from '@/store/index'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/:view/:token',
    component: HomeView,
    // beforeEnter(to, from) {
    //   const token = to.params.token
    //   const view = to.params.view
    //   // Crunch with local storage, because actions does not see state
    //   localStorage.setItem(`${view}Token`, token)
    //   localStorage.setItem('view', view)
    //   console.log(localStorage.getItem('view'))
    //
    //   return { path: `/${view}` }
    // }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
