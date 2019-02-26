<template>
  <div>
    <ul>
      <li v-for="(item,index) in fetchedAsk" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>


<script>
import { mapState, mapGetters} from 'vuex';
export default { 
  computed:{
    //#3
    // ...mapGetters({
    //   fetchedAsk :'fetchedAsk'
    // })

    //#4 배열표기법
    ...mapGetters([
      'fetchedAsk'
    ])

    //#2
    // ...mapState({
    //   ask:state => state.ask
    // })

    //#1
    // ask(){
    //   return this.$store.state.ask;
    // }
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>
