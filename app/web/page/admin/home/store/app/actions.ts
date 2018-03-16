'use strict';

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const host = 'http://localhost:7001';

const actions = {

  FETCH_ARTICLE_LIST: ({ commit, dispatch, state }, query) => {
    return axios.post(`${host}/admin/api/article/list`, { ...{ _csrf: state.csrf }, ...query })
        .then(response => {
          commit(Type.SET_ARTICLE_LIST, response.data);
        });
  },

  FETCH_ARTICLE_DETAIL: ({ commit, dispatch, state }, { id }) => {
    return axios.get(`${host}/admin/api/article/${id}`)
    .then(response => {
      commit(Type.SET_ARTICLE_DETAIL, response.data);
    });
  },

  SAVE_ARTICLE: ({ commit, dispatch, state }, data) => {
    return axios.post(`${host}/admin/api/article/add`, { ...{ _csrf: state.csrf }, ...data })
    .then(response => {
      commit(Type.SET_ARTICLE_LIST, data);
    });
  },

};

export default actions;