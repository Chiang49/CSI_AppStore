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
  {
    path: '/AppDrag',
    name: 'AppDrag',
    component: () => import('../views/AppDrag.vue'),
  },
  {
    path: '/AppTransition',
    name: 'AppTransition',
    component: () => import('../views/AppTransition.vue'),
  },
  {
    path: '/AppModeSwitch',
    name: 'AppModeSwitch',
    component: () => import('../views/AppModeSwitch.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
