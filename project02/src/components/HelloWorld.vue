<template>
  <div class="hello">
     <transition-group tag="ul" name="list">
        <li v-for="(item,index) in items" :key="index">{{item.title}}</li>
     </transition-group>
  </div>
</template>

<script>
import {fetchNewsList } from '../api/index.js';


export default {
  
  data(){
    return{
      items:[]
    }
  },

  beforeMount(){
    var vm=this;
    //axios
    //.get("https://api.hnpwa.com/v0/ask/1.json")
    //.then(({data}) => (this.items=data))
    fetchNewsList()
    .then(function(response){
      console.log(response);
      vm.items=response.data
    })
    //.catch(error => console.log(error));
    .catch(function(){

    })
    
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
