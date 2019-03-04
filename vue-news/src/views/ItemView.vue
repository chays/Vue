<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{fetchedItem.user}}
        </router-link>
        <template slot="time">{{'Posted ' + fetchedItem.time_ago}}</template>
      </user-profile>      
    </section>
    <section>
  <h2>{{fetchedItem.title}}</h2>
    </section>
    <section>
       <div v-html="fetchedItem.content"></div>
    </section>
   
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import UserProfile from '../components/UserProfile'

export default {
  components:{
    UserProfile,
  },
  computed:{
    ...mapGetters(['fetchedItem'])
  },
  created(){ 
    const itemId=this.$route.params.id;
    //axios.get(`https://api/hnpwa.com/v0/item/${itemId}.json`);
    this.$store.dispatch('FETCH_ITEM',itemId);

  }
}
</script>

<style>
.user-container{
  display: flex;
  align-items: center
}
.fa-user{
  font-size:2.5rem;
}
.user-description{
  padding-left:10px
}
.time{
  font-size:7px;
}
</style>
