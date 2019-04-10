import router from './router';
import VueRouter from 'vue-router';
import index from './index.vue';
import store from './store';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import Vuelidate from 'vuelidate'

require('./bootstrap');

Vue.use(Vuetify);
Vue.use(Vuelidate);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    store,
    router,
    template: '<index/>',
    components: { index }
});
