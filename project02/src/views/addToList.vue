<template>
  <section>

      <transition-group name="list" tag="ul">
         <li v-for="item in items" :key="item.id">{{item.id}}</li>
      </transition-group>
      <button type="button" v-on:click="addList">Add new List</button>

  </section>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {
          id:"item"
        },
        {
          id:"item"
        }
      ]
    }
  },
  methods:{
    addList(){
       //let ul = document.querySelector('.list');
       //let newLi = document.createElement('li');
       
       //newLi.innerHTML="NEW LIST";
       //ul.appendChild(newLi)
      //  setTimeout(function(){
      //   newLi.className=newLi.className+'ls';
      //  },10)

       this.items.push({
         id:"new item"
       })    
        
    }
  }
}
</script>

<style lang="scss" scoped>
  section{
    padding:5rem;
  }
  
 ul{
   li{
     padding:0.5rem 2rem;
     margin:0.5rem;
     transition:all 0.4s ease-out;     
   }
   .list-enter, .list-leave-to{
     opacity:0;
     transform:scale(0)
   }
   .list-enter-to{
     opacity: 1;
     transform:scale(1)
   }
 }



</style>

