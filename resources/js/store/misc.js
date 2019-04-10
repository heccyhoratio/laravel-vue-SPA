import store from '../store';

const state = () => {
    return {
        loading: false,
        menuActive: null
    };
};

const mutations = {
    setLoading(state, payload) {
        state.loading = payload;
    },

    setActiveMenu(state, payload) {
        state.menuActive = payload;
    },
};

const actions = {

};

export default {
    state,
    mutations,
    actions
};
