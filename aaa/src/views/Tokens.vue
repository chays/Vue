<template>
    <div>
        <ul>
            <li v-for="(ask, index) in asks" :key="index">{{ask.title}}</li>
        </ul>
    </div>
</template>

<script>
import { fetchAsksList } from '../api/index.js';

export default {
    data(){
        return{
            asks:[]
        }
    },
    beforeMount(){
        var vm=this;
        fetchAsksList()
        .then(response => this.asks=response.data)
        .catch( error => console.log(error));
    }
}
</script>

<style>

</style>
