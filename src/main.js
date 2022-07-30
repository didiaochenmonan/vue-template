import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './app.vue';
import router from './router';

const pinia = createPinia();
createApp(App).use(router).use(pinia).mount(document.getElementById('app'));