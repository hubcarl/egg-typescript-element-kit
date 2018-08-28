'use strict';

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const actions = {

  FETCH_ARTICLE_LIST: ({ commit, dispatch, state }, condition) => {
    return axios.post(`/admin/api/article/list`, condition, {
      headers: {
        'x-csrf-token': state.csrf,
        'Cookie': `csrfToken=${state.csrf}`
      }
    }).then(response => {
      commit(Type.SET_ARTICLE_LIST, response.data);
    });
  },

  FETCH_ARTICLE_DETAIL: ({ commit, dispatch, state }, { id }) => {
    return axios.get(`/admin/api/article/${id}`)
      .then(response => {
        commit(Type.SET_ARTICLE_DETAIL, response.data);
      });
  },

  SAVE_ARTICLE: ({ commit, dispatch, state }, data) => {
    return axios.post(`/admin/api/article/add`, data, {
      headers: {
        'x-csrf-token': state.csrf,
      }
    }).then(response => {
      commit(Type.SET_ARTICLE_LIST, data);
    });
  },

};

export default actions;