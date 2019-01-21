
//import '@babel/preset-env'
import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import Es6Promise from 'es6-promise';
import { router } from './routes/index.js'
import { store } from './store/index.js'

//import 'es6-promise/auto'

Es6Promise.polyfill()
 

Vue.config.productionTip = false


new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store,
});
