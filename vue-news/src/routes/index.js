import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
 
Vue.use(VueRouter);


export const router = new VueRouter({
    mode:'history',
    routes:[
      { 
        path:'/',
        redirect:'/news',
      },
      {
        //path: url주소
        path :'/news',

        //component :url 주소롤 갔을때 표시될 컴포넌트
        component : NewsView,
      },
      {
        path :'/ask',
        component : AskView,
      },
      {
        path :'/jobs',
        component : JobsView,
      },
      {
        path:'/itemView',
        component:ItemView,
      },
      {
        path:'/userView',
        component:UserView,
      }
    ]
});