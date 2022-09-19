import { createApp } from 'vue';

import moment from 'moment/moment';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.config.globalProperties.$moment = moment;

app.use(store);
app.use(router);
app.mount('#app');
