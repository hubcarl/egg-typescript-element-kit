'use strict';
const path = require('path');
const ServiceWorkerWebpackPlugin = require('service-worker-precache-webpack-plugin');
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    include: ['app/web/page',
      {
        'admin/login/login': 'app/web/page/admin/login/login.ts?loader=false',
        'admin/home/home': 'app/web/page/admin/home/home.ts?loader=false'
      }
    ],
    exclude: [/app\/web\/page\/admin\/home\/(component|view|router|store)/],
    loader: {
      client: 'app/web/framework/vue/entry/client-loader.ts',
      server: 'app/web/framework/vue/entry/server-loader.ts',
    }
  },
  alias: {
    server: 'app/web/framework/vue/entry/server.ts',
    client: 'app/web/framework/vue/entry/client.ts',
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store',
    vue: 'vue/dist/vue.esm.js'
  },
  dll: ['vue', 'axios', 'vuex', 'vuex-router-sync'],
  loaders: {
    less: {
      framework: true
    },
    typescript: true
  },
  plugins: {
    
  },
  done() {

  }
};