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
app.provide('axios', app.config.globalProperties.axios);

const addAnimationWhenShowUp = (
  childElementID,
  animationName = 'show-up-from-bottom'
) => {
  const childElement = document.getElementById(childElementID);
  let bounding = childElement.getBoundingClientRect();
  window.addEventListener('scroll', () => {
    if (window.scrollY > childElement.offsetHeight + bounding.y) {
      childElement.classList.add(animationName);
    } else {
      childElement.classList.remove(animationName);
    }
  });
};
app.provide('addAnimationWhenShowUp', addAnimationWhenShowUp);
