<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart></bar-chart>
    <br>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart';

export default {
 components:{
   BarChart,
   LineChart
 },
 data(){
   return{
     
   }
 }
}
</script>

<style>

</style>
