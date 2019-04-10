import store from '../store';
import axios from 'axios';

const state = () => {
    return {
        posts: []
    };
};

const mutations = {
    setPosts(state, payload) {
        state.posts = payload;
    }
};

const actions = {
    fetchAll({commit}, payload) {
        store.commit('misc/setLoading', true);

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                commit('setPosts', response.data);
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
