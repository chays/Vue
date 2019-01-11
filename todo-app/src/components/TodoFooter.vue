<template>
  <div class="clearAllContainer">
    <span class="clearBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods:{
    clearTodo(){
      this.$emit('clearAll');
    }
  }
}
</script>

<style scoped>
  .clearAllContainer{
    width:8.5rem;
    height:50px;
    line-height:50px;
    background-color:#fff;
    border-radius:5px;
    margin:0 auto;
  }
  .clearBtn{
    color:#e20303;
    display:block;
  }
</style>
