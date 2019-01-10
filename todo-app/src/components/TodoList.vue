<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
        <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted:todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{textCompleted:todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fas fa-trash-alt"></i></span>
      </li>
    </ul>
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
    removeTodo:function(todoItem, index){
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1); // 해당index를 지운다.
    },
    toggleComplete:function(todoItem, index){
      todoItem.completed=!todoItem.completed;

      //로컬스토리지 데이터를 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
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

</style>
