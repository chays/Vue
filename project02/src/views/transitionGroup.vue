<template>
  <div>
    <button type="button" v-on:click="add()">Add</button>
    <transition-group  name="card" tag="ul">
      <li class="card" v-for="item in items" :key="item.id">Id: {{ item.id }}</li>  
    </transition-group>
  </div>
</template>

<script>
export default {
  methods: {
    add: function () {
      this.items.push({
        id: Math.random()
      })
    }
  },
  data: function () {
    return {
      items: [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

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
</style>
