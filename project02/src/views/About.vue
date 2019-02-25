<template>
<b-container class="dge-partners">
  
  <div class="dge-partners-cont">

    <transition-group tag="ul" class="partners" name="company">
      <li v-for="(item,index) in partners" v-bind:key="index" class="company">
        <div class="p-item" @click="setActive">
          <img src="@/assets/partner/01.png">
          <div class="active-box">
            <p class="active-txt">{{item.msg}}</p>
          </div>
        </div>
        <a href="#" target="_blank" class="p-link">{{item.msg}}</a>
      </li>      
    </transition-group>


    <ul class="partners" ref="partners">
      <li v-for="(item,index) in partners" v-bind:key="index">
        <div class="p-item" @click="setActive">
          <img src="@/assets/partner/01.png">
          <div class="active-box">
            <p class="active-txt">{{item.msg}}</p>
          </div>
        </div>
        <a href="#" target="_blank" class="p-link">{{item.msg}}</a>
      </li>      
    </ul>
  </div>
  <div class="dge-partners-more">
    <button type="button" class="btn-vmore" @click="click">View more</button>
  </div>
</b-container>
</template>
<script>

export default {
  data(){
    return{
      partners:[
        {msg:'link1'},
        {msg:'link2'},
        {msg:'link3'},
        {msg:'link4'},
        {msg:'link5'},
        {msg:'link6'},
        {msg:'link7'},
        {msg:'link8'},
        {msg:'link9'},
        {msg:'link10'},
      ]
    }
  }, 

  methods:{
    setActive(event){
      let elm = event.currentTarget;
      let elmList =document.querySelectorAll('.p-item.active');  
      if(elm.classList.contains('active')){
          elm.classList.remove('active');  
      } else {          
          elmList.forEach(item=>item.classList.remove('active'));
          elm.classList.add('active');          
      }
   },
   click(event){
     let _this=this;
     let cur=event.currentTarget.textContent;
     let str="View more";   
     let p=_this.$refs.partners.children; 
      //console.log(p[0]);
     
     if(cur !=='Hide'){
       str='Hide';
       event.currentTarget.classList.add('hide');
       //갯수줄어듬
       //p.forEach(item => item.style.display='none');
       for (let i = 0; i < p.length; i++) {
         p[i].style.display='none';
         p[0].style.display='block';
       }
     
     } else{
       event.currentTarget.classList.remove('hide');
       //펼쳐짐
        for (let i = 0; i < p.length; i++) {
         p[i].style.display='block';
       }
       
       
     }     
     event.currentTarget.textContent=str;
   }

 }
}
</script>

<style lang="scss">

.company {
  backface-visibility: hidden;
  transform-origin: 50% 50%;
  z-index: 1;
  transition:all 0.5s ease-in-out;
}

/* moving */
.company-move {
  transition: all 600ms ease-in-out 50ms;
  
}

/* appearing */
.company-enter-active {
  transition: all 300ms ease-out;
}

/* disappearing */
.company-leave-active {
 
}

/* appear at / disappear to */
.company-enter,
.company-leave-to {
  opacity: 0;
}

.company-enter { transform: scale(0.9) }

.company-enter-to,
.company-leave{
  transform:rotate(180deg);
}



.card {
  transition: all 0.5s;
  text-align:left;

}
.card-enter, .card-leave-to
/* .card-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: scale(0);
}
.card-enter-to {
  opacity: 1;
  transform: scale(1);
}

.card-leave-active {
  /*position: absolute;*/
}

.card-move {
  opacity: 1;
  transition: all 0.5s;
}




.section-partners{
  padding:3rem 0;
  background:#f4fafe;
}
.dge-partners{
  .h-ty1{
    text-align:center;    
    &::before{     
      display:block;      
      margin:0 auto 25px;
    }
  }

  .partners{
    position: relative;
    display:flex; 
    flex-wrap: wrap;
    li{     
      width:100%;     
      text-align:center;
      padding-bottom:1rem;
    }
    .p-link{
      position: relative;
      display: inline-block;
      width:100%;
      text-align:center;
      z-index:2;
      margin-top:0.5rem;
      text-decoration:underline;
      font-size:0.875rem;
    }
    .p-item{
      display:block;
      border:1px solid #cdcdcd;
      border-radius:3px;
      text-align:center;
      margin:0.5rem;
      position: relative;    
      transition: all 0.45s ease-in-out;  
      box-sizing:border-box;
      *{
        box-sizing: border-box;
        transition: all 0.45s ease-in-out;
      }
      img{
        width:100%;
        max-width:173px;
      }   
      .active-box{
        position: absolute;
        top: 50%;
        left:-1px;
        right:-1px;
        border: 1px solid white;
        border-width: 1px 1px 1px;
        opacity:0;
        padding:0.5rem;
        display:flex;
        align-items:center;       
        justify-content:center;        
        background: rgba(0,0,0,0.7);
        height:0; 
        box-sizing:border-box;
        &::before{
          content:'';
          position: absolute;
          top:3%;
          left:2%;
          border:1px solid #fff;
          width:96%;
          height:94%;
        }
      }     
      .active-txt{
        opacity: 0;
        font-size:0.875rem;
        line-height:1.4;
        text-align:center;        
      }        
    }
    .p-item.active{      
      img{
        opacity: 0.25;
        transform: scale(1.1);
      }
      .active-box{
        top: 50%;        
        opacity:1;
        margin-top:-80px;
        height:160px;
        z-index:3;
      }
      .active-txt{
        opacity: 1;
        transition-delay: 0.35s;
        color:#fff;        
      }
    }   
  }
  .en, .cn, .jp{
    .dge-partners{
      .partners{
        .active-txt{
          line-height:1.3;
        }
      }
    }
  }
  
}
.dge-partners-more{
  text-align:center; 
}
.btn-vmore{
  display:inline-block;
  border-top:1px solid #a8bcc9;
  padding:1.5rem 0;
  width:100%;
  max-width:300px;
  &::after{
    content:'';
    display:inline-block;     
    font-size:0.75rem;
    margin-left:0.5rem;    
    border-top:12px solid #0b0b0b;
    border-right:7px solid transparent;
    border-bottom:7px solid transparent;
    border-left:7px solid transparent;
    vertical-align:middle;
    margin-top:5px;
  }
  &.hide{
    &::after{
      border-top:7px solid transparent;
      border-right:7px solid transparent;
      border-bottom:12px solid #000;
      border-left:7px solid transparent;
      margin-top:-7px;
    }
  }
}


@media (min-width: 576px) {
  html{
    font-size:16px;
  }
  .h-ty1{
    font-size:2.813rem;
    &::before{   
      margin-bottom:25px;
    }
  }
  .dge-partners{
    .partners{    
      li{     
        width:50%;
      }
    }
  }
}

@media (min-width:768px){
    .dge-partners{
    .h-ty1{
      margin-bottom:0;
    }
    .partners{
      li{
        width:33.33%;
      }
      .p-item{
        margin-bottom:0;
        margin-left:0.75rem;
        margin-right:0.75rem;
        padding:0.5rem 0;
      }
      .p-item.active{          
        .active-box{       
          margin-top:-100px;
          height:200px;
        }     
      }
    }    
  }
}

@media (min-width: 992px) {
  .dge-partners{
    .h-ty1{
      margin-bottom:0;
    }
    .partners{
      li{
        width:25%;
      }
    }    
  }
}

</style>
