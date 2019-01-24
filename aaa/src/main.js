import '@babel/polyfill';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/my-style.scss';

import ChartPlugin from './plugins/ChartPlugin.js';

Vue.config.productionTip = false;
Vue.use(ChartPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
