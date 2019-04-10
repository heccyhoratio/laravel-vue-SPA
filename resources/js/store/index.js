import Vue from 'vue';
import Vuex from 'vuex';
import posts from './posts';
import comments from './comments';
import misc from './misc';


/**
 * Initialise Vuex and set namespaced store segments
 * @author CB
 */

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        posts: {
            namespaced: true,
            ...posts
        },
        comments: {
            namespaced: true,
            ...comments
        },
        misc: {
            namespaced: true,
            ...misc
        }
    }
});
