import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('./views/Business.vue')
    },
    {
      path:'/news',
      name:'news',
      component: () => import('./views/NewsCenter.vue')
    },
    {
      path:'/jobs',
      name:'jobs',
      component: () => import('./views/Recruit.vue')
    },
    {
      path:'/asks',
      name:'asks',
      component: () => import('./views/Tokens.vue')
    }
  ]
});
