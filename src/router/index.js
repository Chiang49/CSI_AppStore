import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'UserDevice',
    component: () => import('../views/AppUserDevice.vue'),
  },
  {
    path: '/appUploadFile',
    name: 'AppUploadFile',
    component: () => import('../views/AppUploadFile.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
