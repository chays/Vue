<template>
  <div>
    <list-item></list-item>    
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin.js'

export default { 
  components:{
    ListItem,
  },
  mixins:[ListMixin]
  // created(){
  //   bus.$emit('start:spinner')   
  //     this.$store.dispatch('FETCH_ASK')
  //     .then(()=>{
  //     bus.$emit('end:spinner')
  //   })
  //   .catch( error=>console.log(error));       
  // }

  // mounted(){
  //   bus.$emit('end:spinner');
  // }
}
</script>
