'use strict';

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const host = 'http://127.0.0.1:7001';

const actions = {

  FETCH_ARTICLE_LIST: ({ commit, dispatch, state }, { pageIndex, pageSize }) => {
    return axios.get(`${host}/admin/api/article/list?pageIndex=${pageIndex}&pageSize=${pageSize}`)
        .then(response => {
          commit(Type.SET_ARTICLE_LIST, response.data);
        });
  },

  FETCH_ARTICLE_DETAIL: ({ commit, dispatch, state }, { id }) => {
    return axios.get(`${host}/admin/api/article/${id}`)
    .then(response => {
      commit(Type.SET_ARTICLE_DETAIL, response.data);
    });
  }
};

export default actions;


