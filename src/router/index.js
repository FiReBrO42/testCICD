import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: "/OutfitIdea", // 預設顯示頁面
    name: 'home',
    component: () => import('../layout/LayoutView.vue'),
    children: [
      { 
        path: 'OutfitIdea',
        name: 'OutfitIdea',
        component: () => import('../page/OutfitIdea.vue') 
      },
      { 
        path: 'ClothingList',
        name: 'ClothingList',
        component: () => import('../page/ClothingList.vue') 
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
