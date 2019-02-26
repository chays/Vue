<template>
  <div>
    <ul>
      <li v-for="(user,index) in this.$store.state.news" :key="index">
        <a v-bind:href="user.url" target="_blank">{{user.title}}</a>
        </li>
    </ul>
  </div>
</template>

<script>


export default {

  created(){

    this.$store.dispatch('FETCH_NEWS');

    //1
    // fetchNewsList()
    // .then(response => this.users=response.data)
    // .catch(error => console.log(error))
  }
}
</script>

<style>

</style>
