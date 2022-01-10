import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
