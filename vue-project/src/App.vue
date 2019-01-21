<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>   
    <footer-view></footer-view>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView';
import FooterView from './components/FooterView';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    'header-view': HeaderView,
    'footer-view': FooterView
  }
}
</script>

<style>
body{
  margin:0;
  padding:0
}
</style>
