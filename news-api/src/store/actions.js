import { fetchNewsList, fetchJobsList, fetchAsksList,fetchUserInfo, fetchItemView, fetchList } from '../api/index.js';

export default{
  FETCH_NEWS(context){
    return fetchNewsList()
    .then(response => {
      console.log(response.data);
      context.commit('SET_NEWS', response.data);  
      return response;
    })
    .catch(error => console.log(error));
  },
  FETCH_JOBS({commit}){
    return fetchJobsList()
    .then(({data}) => {
      commit('SET_JOBS', data);  
    })
    .catch(error => console.log(error));
  },
  FETCH_ASKS({commit}){
    return fetchAsksList()
    .then(({data}) =>{        
      commit('SET_ASKS', data);
    })
    .catch(error => console.log(error));
  },
  FETCH_USER({ commit }, name){
    return fetchUserInfo(name)
    .then(({data}) =>{
      commit('SET_USER', data);
    })
    .catch(error => console.log(error));
  },
  FETCH_ITEM({commit}, id){
    return fetchItemView(id)
    .then(({data}) =>{
      commit('SET_ITEM',data);
    })
    .catch(error => console.log(error));
  },
  //#2  
  FETCH_LIST({commit}, pageName){

    //#3    
    return fetchList(pageName)
    .then( response => {
      //#4
      console.log(4);
      commit('SET_LIST',response.data);
      return response;
    })
    .catch(error => console.log(error));
  }
};