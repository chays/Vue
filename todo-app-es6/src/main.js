import '@babel/polyfill'
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store.js'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
