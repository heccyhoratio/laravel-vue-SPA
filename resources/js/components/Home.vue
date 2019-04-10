<template>
    <div>
        <div class="c-content-container">
            <div class="c-content-container__nothing">

            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import router from './../router';

    export default {
        components: {

        },

        computed: {
            ...mapState({

            })
        },
        methods : {
            SeePosts() {
                router.push({ name: 'posts'})
            }
        }
    };
</script>
