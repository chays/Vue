<template>
  <div>
    <section>
      <!-- 질문상세정보 -->
        <div class="user-container">
          <div>
            <i class="fas fa-user"></i>
          </div>  
          <div class="user-discription">
            <router-link v-bind:to="`${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
          </div>
          <div>{{ fetchedItem.time_ago }}</div>
        </div>
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
import { mapGetters }  from 'vuex'

export default {
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
