import store from '../store';
import axios from 'axios';

const state = () => {
    return {
        comments: [],
        comment: {
            name: '',
            body: '',
            email: '',
        }
    };
};

const mutations = {
    setComments(state, payload) {
        state.comments = payload;
    },

    setSingleComment(state, payload) {
        state.comment = payload;
    },
};

const actions = {
    fetchAll({commit}, payload) {
        store.commit('misc/setLoading', true);

        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(function (response) {
                commit('setComments', response.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                store.commit('misc/setLoading', false);
            });
    },

    fetchSingle({commit}, payload) {
        store.commit('misc/setLoading', true);
        let url = 'https://jsonplaceholder.typicode.com/comments/' + payload;

        axios.get(url)
            .then(function (response) {
                commit('setSingleComment', response.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                store.commit('misc/setLoading', false);
            });
    },

    fetchForPost({commit}, payload) {
        store.commit('misc/setLoading', true);
        let url = 'https://jsonplaceholder.typicode.com/comments?postId=' + payload;

        axios.get(url)
            .then(function (response) {
                commit('setComments', response.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                store.commit('misc/setLoading', false);
            });
    },
};

export default {
    state,
    mutations,
    actions
};
