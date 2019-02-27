import { fetchNewsList, fetchJobsList, fetchAskList,fetchUserInfo,fetchItemView } from '../api/index.js';

export default{
  FETCH_NEWS({commit}){
    fetchNewsList()
    .then( ({data}) =>{
      commit('SET_NEWS',data);
    })
    .catch( error => {
      console.log(error);
    })
  },
  FETCH_JOBS({commit}){
    fetchJobsList()
    .then(({data}) =>{
      commit('SET_JOBS',data);
    })
    .catch(error => console.log(error));
  },
  FETCH_ASK(context){
    fetchAskList()
    .then(response => {
      context.commit('SET_ASK',response.data);
    })
    .catch( error=> console.log(error));
  },
  FETCH_USER({commit}, name){
    fetchUserInfo(name)
    .then(({data}) => {
      commit('SET_USER',data)
    })
    .catch( error=> console.log(error));
  },
  FETCH_ITEM({commit},id){
    fetchItemView(id)
    .then(({data}) =>{
      commit('SET_ITEM',data)
    })
    .catch(error=>console.log(error));
  }
}