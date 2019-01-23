
import '@babel/polyfill'
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import { store } from './store/index.js'

Vue.config.productionTip = false


new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store,
});
