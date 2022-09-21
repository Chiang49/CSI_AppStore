import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'UserDevice',
    component: () => import('../views/AppUserDevice.vue'),
  },
  {
    path: '/UploadFile',
    name: 'UploadFile',
    component: () => import('../views/AppUpData.vue'),
  },
  {
    path: '/UploadScreenshots',
    name: 'UploadScreenshots',
    component: () => import('../views/AppUploadScreenshots.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
