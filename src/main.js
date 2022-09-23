import { createApp } from 'vue';

// moment.js
import moment from 'moment/moment';

// sweetalert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

// moment.js
app.config.globalProperties.$moment = moment;

// sweetalert
app.use(VueSweetalert2);

app.use(store);
app.use(router);
app.mount('#app');
