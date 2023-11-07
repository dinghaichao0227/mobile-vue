import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';
import '@/styles/main.scss';
import './utils/rem';

import jQuery from 'jquery';
import SlideVerify from 'vue-monoplasty-slide-verify';
import 'bootstrap';
import * as bootstrap from 'bootstrap';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(bootstrap);
Vue.prototype.jQuery = jQuery;


new Vue({
  router,
  store,
  SlideVerify,
  render: (h) => h(App),
}).$mount('#app');
