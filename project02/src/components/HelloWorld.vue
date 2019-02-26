<template>
  <div class="hello">
     <transition-group tag="ul" name="list">
        <li v-for="(item,index) in this.$store.state.items" :key="index">{{item.title}}</li>
     </transition-group>
  </div>
</template>

<script>



export default {
  

  created(){
    
    this.$store.dispatch('FETCH_NEWS');
    
  }
}
</script>

<style scoped lang="scss">

li{text-align:left}

.alert-in-enter-active {
  animation: bounce-in .5s;
}
.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
