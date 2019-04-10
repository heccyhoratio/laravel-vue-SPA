<template>
    <div id="app">
        <v-app>
            <trafficLights></trafficLights>
            <siteMenu></siteMenu>
            <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
            <router-view v-if="!loading" class="small-top-padding"></router-view>
        </v-app>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import siteMenu from './components/Menu';
    import trafficLights from './components/TrafficLights';

    export default {
        components: {
            siteMenu,
            trafficLights
        },

        computed: {
            ...mapState({
                loading: state => state.misc.loading
            })
        },
    };
</script>

<style lang="scss">
    @import '../sass/app';
</style>
