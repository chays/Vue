import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    news:[],
    jobs:[],
    asks:[],
    user:[],
    item:[],
    list:[]
  },
  getters:{
    //computed와 동일한 속성
    fetchedAsk(state){
      return state.asks;
    },
    fetchedItem(state){
      return state.item;
    }
  },
  mutations,
  actions,
})
