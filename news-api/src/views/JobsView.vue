<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        <div class="points">{{job.points || 0 }}</div>
        <a v-bind:href='job.url' class="news-title">{{ job.title }}</a>
        <small class="link-text">{{ job.time_ago}} {{ job.domain }}</small>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';

export default {
 components:{
   ListItem,
 },
  mixins:[ListMixin],

//  created(){
//    bus.$emit('start:spinner');
//     setTimeout(() => {
//       this.$store.dispatch('FETCH_JOBS')
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