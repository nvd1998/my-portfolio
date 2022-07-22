import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios); // provide 'axios'

const commonCmps = import.meta.globEager('@/components/*.vue');
registerComponents(app, commonCmps);

function registerComponents(app, components) {
  Object.entries(components).forEach(([path, definition]) => {
    const componentName = path
      .split('/')
      .pop()
      .replace(/\.\w+$/, '');
    app.component(componentName, definition.default);
  });
}
