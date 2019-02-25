<template>
  <div id="app">
    <header-section ref="Header" id="myHeader"></header-section>
    <container-section ref="Container"></container-section>
    <footer-section ref="Footer"></footer-section>
  </div>
</template>
<script>

import headerSection from './components/Header.vue';
import footerSection from './components/Footer.vue';
import containerSection from './components/Container.vue';

export default {
  el: '#app',
  components:{
    'header-section':headerSection,
    'container-section':containerSection,
    'footer-section':footerSection
  },
  data(){
    return{
      //scrollElm:undefined,
    }
  },
  computed:{
     
  },  
  created(){
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  },
  methods:{

    

   

  },
  created (){
    window.onscroll=function(){myFunction()}
  },
  destroyed () {
    //window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {

      let _this=this;
      this.$nextTick(() => {
        window.addEventListener('resize', () => {  
          let innerHeight = window.innerHeight; 
          let HeaderHeight = this.$refs.Header.$el.clientHeight; 
          let FooterHeight = this.$refs.Footer.$el.clientHeight;
          let Container = this.$refs.Container.$el;
          let ContainerHeight = innerHeight - HeaderHeight - FooterHeight;
          Container.style.minHeight=ContainerHeight+'px';
        });
      });    
      let innerHeight = window.innerHeight; 
      let HeaderHeight = this.$refs.Header.$el.clientHeight; 
      let FooterHeight = this.$refs.Footer.$el.clientHeight;
      let Container = this.$refs.Container.$el;
      let ContainerHeight = innerHeight - HeaderHeight - FooterHeight;
      Container.style.minHeight=ContainerHeight+'px';

      

     let header =document.getElementById('header');
     let sticky=this.header.offsetTop;

     function myFunction(){
        if(window.pageXOffset>sticky){
          header.classList.add("sticky");
        } else{
          header.classList.remove("sticky");
        }
     }
   
  }


}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#header.sticky{
  position:fixed;
  top:0;
  left:0;
  width:100%;
}
</style>
