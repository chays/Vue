import { fetchNewsList, fetchJobsList, fetchAskList,fetchUserInfo,fetchItemView, fetchList } from '../api/index.js';

export default{
  //promise
  // FETCH_NEWS({commit}){
  //   fetchNewsList()
  //   .then( ({data}) =>{
  //     commit('SET_NEWS',data);
  //   })
  //   .catch( error => {
  //     console.log(error);
  //   })
  // },
  //async
  async FETCH_NEWS(context){
    const response=await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },
  // FETCH_JOBS({commit}){
  //   fetchJobsList()
  //   .then(response =>{
  //     commit('SET_JOBS',response.data);      
  //   })
  //   .catch(error => console.log(error));
  // },
  async FETCH_JOBS(context){
    try{  
      const response=await fetchJobsList();
      context.commit('SET_JOBS',response.data);
      return response;
    } catch(error) {
      console.log(error)
    }
   
  },

  // FETCH_ASK(context){
  //   fetchAskList()
  //   .then(response => {
  //     context.commit('SET_ASK',response.data);
  //   })
  //   .catch( error=> console.log(error));
  // },

  async FETCH_ASK(context){
    const response=await fetchAskList();
    context.commit('SET_ASK',response.data);
    return response;
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
  },

  // FETCH_LIST({commit},pageName){
  //  return fetchList(pageName)
  //   .then(response => {
  //     commit('SET_LIST',response.data);
  //     return response;
  //   })
  //   .catch(error=>console.log(error));
  // },
  async FETCH_LIST({commit},pageName){
    const response=await fetchList(pageName)
    commit('SET_LIST',response.data);
    return response;       
   }

}