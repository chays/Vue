<template>
  <div>
    <!-- <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition> -->

    <div id="example-1">
      <button @click="show = !show">
        Toggle render
      </button>
      <transition name="slide-fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <div>

    <transition>
      <button v-bind:key="docState">
        {{ buttonMessage }}
      </button>
    </transition>

    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      show:true,
      //buttonMessage:'saved'
    }
  },
  computed:{
    buttonMessage:function(){
      switch (this.docState){
        case 'saved' : return 'Edit'
        case 'edited':return 'Save'
        case 'editing' : return 'Cancel'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to  {
  opacity: 0;
}

//example1
.slide-fade-enter-active{
  transition:all .3s ease;
}

.slide-fade-leave-active{
  transition: all .8s cubic-bezier(1.0,0.5,0.8,1.0);
}
/*
ease(default) :( 0.25,0.1,0.25,1.0 )
linear :  (0.25, 0.25, 0.75, 0.75)
ease-in :  (0.42, 0.0, 1.0, 1.0)
ease-out : (0.0, 0.0, 0.58, 1.0) 
ease-in-out : (0.42, 1.0, 0.58, 1.0)
*/


.slide-fade-enter,
.slide-fade-leave-to{
  transform:translateX(10px);
  opacity:0;
}



//enter
v-enter,
v-leave-to{
  opacity:0;
}

//leave
.v-enter-to,
.v-leave{
  opacity: 1;
}

//입/출력 트랜지션을 위한 다른 easing curve를 지정
.v-enter-active{
  //enter에 대한 활성 및 종료 상태
}
.v-leave-active{

}

</style>
