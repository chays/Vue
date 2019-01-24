<template>
  <canvas id="barChart" width="400" height="400" ref="barChart"></canvas>     
</template>

<script>

export default {
  props:['propsdata'],
  mounted(){
        var ctx = this.$refs.barChart;
        var barChart = new this.$_Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: this.propsdata
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }
}
</script>

<style>

</style>
