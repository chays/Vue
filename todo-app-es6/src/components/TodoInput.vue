<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo" ><i class="fas fa-plus addBtn"></i></span>

    <Modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">
        경고!
        <i class="closeModal fas fa-times" @click="showModal=false"></i>
      </h3>
      <div slot="body">할일을 입력하세요</div>
      
    </Modal>

  </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
  data(){
    return{
      newTodoItem:"",
      showModal: false
    }
  },
  methods:{
    addTodo:function(){
      //console.log(this.newTodoItem);
      //저장하는 로직
      if(this.newTodoItem !==''){  
        //this.$emit("이벤트 이름", 인자1,인자2...);     
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal =! this.showModal;
      }
      
    },
    clearInput:function(){
      this.newTodoItem="";
    }
  },
  components:{
    Modal :Modal
  }
}
</script>

<style scoped>
input:foucs{
  outline: none;
}
.inputBox{
  background:#fff;
  height:50px;
  line-height: 50px;
  border-radius:5px
}
.inputBox input{
  border-style:none;
  font-size:0.9rem;
  width:80%;
  line-height: 40px;
}

.addContainer{
  float:right;
  background:linear-gradient(to right,#6478fb, #8763fb);
  display:block;
  width:3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn{
  color:#fff;
  vertical-align:middle;
}
.closeModalBtn{
  color:#43b983;
}

</style>
