<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AppIndex></AppIndex>
  </div>
</template>

<script>
import AppIndex from './components/AppIndex.vue'

export default {
  
  name: 'app',
  components: {
    AppIndex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
