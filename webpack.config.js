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
    sw: 'app/web/framework/sw/sw.ts',
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
    less: true,
    typescript: true
  },
  plugins: {
    serviceWorker: {
      type: 'client',
      name: new ServiceWorkerWebpackPlugin({
        prefix: 'sw',
        hash: true,
        strategy: [
          {
            name: 'index',
            entry: 'index/index',
          },
          {
            name: 'category',
            entry: ['category/category', 'about/about'],
            options: {
              runtimeCaching: [
                {
                  urlPattern: /^https:\/\/category\.com\/api/,
                  handler: 'fastest'
                }
              ]
            }
          }
        ],
        manifest: 'config/manifest.json',
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/example\.com/,
            handler: 'fastest'
          }, {
            urlPattern: /^https:\/\/example2\.com/,
            handler: 'fastest'
          }
        ]
      })
    }
  },
  done() {

  }
};