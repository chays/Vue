<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        <div class="points">{{item.points}}</div>
        <router-link v-bind:to="`/item/${ item.id }`" class="news-title">{{ item.title }}</router-link>
        <small class="link-text">{{item.time_ago}}{{item.user}}</small>
      </li>
    </ul>    
  </div>
</template>

<script>

import { mapState, mapGetters } from "vuex"

export default {
  computed:{

    // ...mapGetters({
    //     askItem:'fetchedAsk'
    // })

    ...mapGetters(['fetchedAsk'])

    // #2
    // ...mapState({
    //     fetchedAsk:state => state.asks
    // }),

    // #1
    // asks(){
    //   return this.$store.state.asks;
    // }
  },
  created(){
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style scoped>
.news-list{
  margin:0;
  padding:0;
}
.post{
  list-style:none;
  display:flex;
  align-items:center;
  border-bottom:1px solid #eee;
}
.points{
  width:80px;
  height:60px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#42b883
}
.news-title{
  margin:0;
}
.link-text{
  color:#888
}
</style>
