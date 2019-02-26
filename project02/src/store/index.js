import Vue from 'vue'
import Vuex from 'vuex'
import {fetchNewsList } from '../api/index.js';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    items:[]
  },
  mutations:{
    SET_NEWS(state,items){
      state.items=items
    }
  },
  actions:{
    FETCH_NEWS(context){
      fetchNewsList()
      .then(response =>{
          context.commit('SET_NEWS',response.data)
      })
      .catch(error=>console.log(error));
    }
    
  }

})