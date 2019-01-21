<template>
  <div>
    <section>
      <!-- 사용자정보 -->
      <user-profile :info="fetchedItem">
          <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
          <router-link v-bind:to="`/user/${fetchedItem.user}`" slot="username">{{ fetchedItem.user }}</router-link>
          <template slot="time">{{ 'Posted' + fetchedItem.time_ago }}</template>
      </user-profile>
        <!-- <div class="user-container">
          <div>
            <i class="fas fa-user"></i>
          </div>  
          <div class="user-discription" sloe="username">
            <router-link v-bind:to="`${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
          </div>
          <div slot="time">{{ fetchedItem.time_ago }}</div>
        </div>         -->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>     
      <div v-html="fetchedItem.content">
      <!-- {{ fetchedItem.content }} -->
      </div>
      <div><a href="/ask">목록으로</a></div>
    </section>
    
    
    
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import { mapGetters }  from 'vuex'

export default {
  components:{
    UserProfile,
  },
  computed:{
    ...mapGetters(['fetchedItem'])
  },
  created(){
    const itemId=this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM',itemId)
  }

}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items:center;
}
section{
  padding:1rem;
}
</style>
