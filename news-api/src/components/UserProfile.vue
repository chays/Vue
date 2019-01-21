<template>
  <div>
    <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>  
      <div class="user-discription">
        <slot name="username"></slot>
        <div>
          <!-- username : {{ info.id }} -->
        </div>
      </div>
      <div class="time">
        <slot name="time"></slot>
        <!-- time : {{ info.created }} -->
      </div>
      <slot name="karma">
        
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    info:Object
  },
  // computed:{
  //   userInfo(){
  //     return this.$store.state.user;
  //   }
  // },
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items:center;
}
</style>
