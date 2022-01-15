import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import("@/views/Home")
  },
  {
    path: '/our-consultants',
    name: 'ConsultingPartners',
    component: ()=>import("@/views/ConsultingPartners")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
