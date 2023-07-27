import { createStore } from 'vuex';

import axios from 'axios';

export default createStore({
  state: {
    postsInfoData: {},
    currentDataPost: {},

    currentDataUser: {},

    commentsData: [],

    selectedSortValue: '',
    sortOptionsValue: [],
  },
  getters: {
    //posts
    getPostsInfoData: (state) => {
      if (state.selectedSortValue === '') return state.postsInfoData;
      return [...state.postsInfoData].filter(
        (post) => post.userId == state.selectedSortValue
      );
    },
    getCurrentDataPost: (state) => state.currentDataPost,
    //comments
    getCommentsInfo: (state) => state.commentsData,
    //sort
    getSelectedSortValue: (state) => state.selectedSortValue,
    getSortOptionsValue: (state) => state.sortOptionsValue,
    //user
    getCurrentDataUser: (state) => state.currentDataUser,
  },
  mutations: {
    SET_CURRENT_DATA_USER: (state, currentDataUser) => {
      state.currentDataUser = currentDataUser;
    },
    SET_COMMENTS_DATA: (state, commentsData) => {
      state.commentsData = commentsData;
    },
    ADD_COMMENT_IN_COMMENTS_DATA: (state, newComment) => {
      console.log(state.commentsData);
      console.log(newComment);

      state.commentsData.push(newComment);
    },
    SET_POSTS_INFO_DATA: (state, postsInfoData) => {
      state.postsInfoData = postsInfoData;
    },
    SET_CURRENT_DATA_POST: (state, currentDataPost) => {
      state.currentDataPost = currentDataPost;
    },
    SET_SELECTED_SORT_VALUE: (state, selectedSortValue) => {
      state.selectedSortValue = selectedSortValue;
    },
    SET_SORT_OPTIONS_VALUE: (state, sortOptionsValue) => {
      state.sortOptionsValue = sortOptionsValue;
    },
  },
  actions: {
    async getAllDataPosts({ commit }) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
          commit('SET_POSTS_INFO_DATA', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getCurrentPost({ commit }, id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          commit('SET_CURRENT_DATA_POST', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getComments({ commit }, id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => {
          commit('SET_COMMENTS_DATA', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getAllDataUsers({ commit }) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          commit('SET_SORT_OPTIONS_VALUE', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getCurrentUser({ commit }, id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
          commit('SET_CURRENT_DATA_USER', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async createComment({ commit }, commentData) {
      axios
        .post('https://jsonplaceholder.typicode.com/comments', commentData, {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => {
          commit('ADD_COMMENT_IN_COMMENTS_DATA', response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
});
