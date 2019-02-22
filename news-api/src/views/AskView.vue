<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        <div class="points">{{item.points}}</div>
        <router-link v-bind:to="`/item/${ item.id }`" class="news-title">{{ item.title }}</router-link>
        <small class="link-text">{{item.time_ago}}{{item.user}}</small>
      </li>
    </ul>     -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';
import bus from '../utils/bus.js';

//import { mapState, mapGetters } from "vuex"

export default {
  components:{
    ListItem,
  },

  mixins:[ListMixin],

  // computed:{
  //   ...mapGetters(['fetchedAsk'])
  // },
 
//  created(){   
//     bus.$emit('start:spinner');
//     setTimeout(() => {
//       this.$store.dispatch('FETCH_ASKS')
//         .then(() =>{
//           console.log('fetched');
//           bus.$emit('end:spinner');
//         })
//         .catch((error) => {
//           console.log(error)
//         });        
//     }, 3000)   
//  }
}
</script>

