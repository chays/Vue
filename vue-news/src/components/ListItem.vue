<template>
  <div>
    <ul class="news-list">
      <li v-for="(item,index) in listItems" :key="index" class="post">
        <div class="points">{{item.points || 0}}</div>
        <div>
          <!-- 리스트 아이템 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
                <a v-bind:href="item.url" target="_blank">{{item.title}}</a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">{{item.title}}</router-link>
            </template>
          </p>
          <small>{{item.time_ago}} by 
            <router-link v-if="item.user"
            v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
            <a :href="item.url" v-else>{{item.domain}}</a>
          </small>
        </div>   
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  computed:{
    listItems(){
      return this.$store.state.list;
      // const name=this.$route.name;
      // if(name==='news'){
      //   return this.$store.state.news
      // } else if( name==='ask'){
      //   return this.$store.state.ask
      // } else if( name==='jobs'){
      //   return this.$store.state.jobs
      // }
    }
  },
  // created(){    
  //   const name=this.$route.name;  
  //   if(name==='news'){
  //       this.$store.dispatch('FETCH_NEWS');
  //   } else if( name==='ask'){
  //       this.$store.dispatch('FETCH_ASK');
  //   } else if( name==='jobs'){
  //       this.$store.dispatch('FETCH_JOBS');
  //   }
  // }

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
  color:#42b883;
}
.news-title{
  margin:0;
  padding:0
}
</style>
