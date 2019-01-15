<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/ask">Ask</router-link> |
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  padding:1rem;
  background:#41b883;
  color:#fff;
}
.header a{
  color:#fff;
}
.header .router-link-exact-active{
  color:#35495e;
}
</style>
