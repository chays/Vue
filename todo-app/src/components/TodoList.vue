<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
        <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted:todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{textCompleted:todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fas fa-trash-alt"></i></span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  //2
  // data:function(){
  //   return{
  //     todoItems:[]
  //   }
  // },
  props:['propsdata'],
  methods:{
    removeTodo(todoItem, index){
      this.$emit('removeItem',todoItem, index);
      //removeItem 이벤트를 발생시켜서 todoItem, index 인자를 보낸다.
    },
    toggleComplete(todoItem, index){
      this.$emit('toggleItem',todoItem, index);
    }
  },
  //1
  // created:function(){
  //   if(localStorage.length>0){
  //     for(var i=0;i<localStorage.length;i++){
  //       if(localStorage.key(i) !=='loglevel:webpack-dev-server'){
  //         //this.todoItems.push(localStorage.key(i));
  //        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                  
  //       }
  //     }
  //   }
  // }
}
</script>

<style scoped>
ul{
  list-style-type:none;
  padding-left:0px;
  margin-top:0;
  text-align:left;
}
li{
  display:flex;
  min-height:50px;
  line-height: 50px;
  margin:0.5rem 0;
  padding:0 0.9rem;
  background:#fff;
  border-radius:5px;
}
.checkBtn{
  line-height:45px;
  color:#62acde;
  margin-right:5px;
}
.checkBtnCompleted{
  color:#b3adad;
}
.textCompleted{
  text-decoration: line-through;
  color:#b3adad;
}
.removeBtn{
  margin-left:auto;
  color:#de4343;
}


/**/
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}


</style>
