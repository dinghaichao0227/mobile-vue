import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';
import '@/styles/main.scss';
import './utils/rem';

import jQuery from 'jquery'
import 'bootstrap';

import ElementUI from 'element-ui';

import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.jQuery= jQuery;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
