<template>
  <div>
    <ul>
      <item v-for="item in items" :propsdata="item"></item>
    </ul>
    <check-box v-model="checked"></check-box>
  </div>
</template>

<script>
import Item from './Item.vue';
import CheckBox from './CheckBox.vue'

export default {
  components:{
    Item,
    CheckBox,
  },
  data(){
    return{
      items:['아이템1','아이템2','아이템3','아이템4','아이템5'],
      checked:false,
    }
    
  }
}
</script>

<style>

</style>
