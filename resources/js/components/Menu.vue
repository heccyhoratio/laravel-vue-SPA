<template>
    <v-card height="200px" flat>
        <div class="headline text-xs-center pa-5">
            Template Laravel Frontend
        </div>
        <v-bottom-nav
                :active="menuActive"
                value="true"
                absolute
                color="transparent"
        >
            <v-btn
                    @click="SeeHome"
                    color="teal"
                    flat
                    value="home"
            >
                <span>Home</span>
                <v-icon>home</v-icon>
            </v-btn>

            <v-btn
                    @click="SeePosts"
                    color="teal"
                    flat
                    value="posts"
            >
                <span>Posts</span>
                <v-icon>local_post_office</v-icon>
            </v-btn>

            <v-btn
                    @click="SeeComments"
                    color="teal"
                    flat
                    value="comments"
            >
                <span>Comments</span>
                <v-icon>comment</v-icon>
            </v-btn>
        </v-bottom-nav>
    </v-card>
</template>

<script>
    import { mapState } from 'vuex';
    import router from './../router';

    export default {

        computed: {
            ...mapState({
                menuActive: state => state.misc.menuActive
            })
        },

        methods : {
            SeeHome() {
                router.push({ name: 'home'})
            },

            SeePosts() {
                router.push({ name: 'posts'})
            },

            SeeComments() {
                router.push({ name: 'comments'})
            }
        }
    };
</script>
