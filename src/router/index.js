import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'AppList',
    component: () => import('../views/AppList.vue'),
  },
  {
    path: '/about',
    name: 'AppDetail',
    component: () => import('../views/AppDetail.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
