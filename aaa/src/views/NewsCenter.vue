<template>
    <div>
        <ul>
            <li v-for="(item,index) in news" :key="index">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';
export default {

    data(){
        return{
            news:[]
        }
    },
    created(){
      //데이터요청  

    },
    beforeMount(){
        
        fetchNewsList()
        .then( response => this.news=response.data)
        .catch(error => console.log(error));
    },
    mounted(){

    }

}
</script>

<style>

</style>
