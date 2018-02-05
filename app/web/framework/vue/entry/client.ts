import Vue from 'vue';
import '../filter';
import '../directive';
import '../component';

declare global {
  interface Window { __INITIAL_STATE__: any; }
}

export default function(options) {
  const state = window.__INITIAL_STATE__ || {};
  Vue.prototype.$http = require('axios');
  if (options.store) {
    options.store.replaceState(state);
  } else if (state) {
    options.data = Object.assign(state, options.data && options.data());
  }
  const app = new Vue(options);
  app.$mount('#app');
}
