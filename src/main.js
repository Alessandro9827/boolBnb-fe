
import { createApp } from 'vue';
import { router } from './components/js/router';
import './style/general.scss';

import App from './App.vue';

createApp(App).use(router).mount('#app');
