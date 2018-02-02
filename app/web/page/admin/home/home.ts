import Vue from 'vue';
import ElementUI from 'element-ui'
import { sync } from 'vuex-router-sync';
import clientRender from 'client';
import serverRender from 'server';
import Layout from 'component/layout/admin';
import store from './store/app';
import router from './router';
import home from './home.vue';
import '../../../theme/index.css'
import '../../../asset/css/font-awesome.min.css'

Vue.use(ElementUI);
Vue.component(Layout.name, Layout);
sync(store, router);

const options = {
  ...home,
  router,
  store
};

export default EASY_ENV_IS_NODE ? serverRender(options) : clientRender(options);
