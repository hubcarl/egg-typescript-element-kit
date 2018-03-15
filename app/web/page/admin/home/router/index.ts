import Vue from 'vue';

import VueRouter from 'vue-router';
import Dashboard from '../view/dashboard/index.vue';
import ArticleList from '../view/list.vue';
import AddArticle from '../view/write/index.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: '/admin/',
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/article/list',
      component: ArticleList
    },
    {
      path: '/article/add',
      component: AddArticle
    },
    {
      path: '/article/detail/:id',
      component: () => import('../view/detail.vue')
    },
    {
      path: '*', component: () => import('../view/notfound.vue')
    }
  ]
});
