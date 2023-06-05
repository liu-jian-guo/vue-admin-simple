import './assets/main.css';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import RootNav from '@/components/Sider/menu.vue';
// import RootNav from './components/RootNav.vue'

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);
app.component('RootNav', RootNav);

app.mount('#app');
