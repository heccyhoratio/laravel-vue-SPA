<template>
    <div>
        <div class="c-content-container" >
            <template>
                <v-data-table
                        :headers="headers"
                        :items="posts"
                        class="elevation-1"
                >
                    <template v-slot:items="props">
                        <td>{{ props.item.id }}</td>
                        <td>{{ props.item.title }}</td>
                        <td>{{ props.item.body }}</td>
                        <td><v-btn color="info" @click="navigateComments(props.item.id)">View Comments</v-btn></td>
                    </template>
                </v-data-table>
            </template>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import router from './../router';

    export default {

        data() {
            return {
                headers: [
                    { text: 'id', value: 'id', align: 'center', sortable: true },
                    { text: 'title', value: 'title', align: 'center', sortable: true },
                    { text: 'body', value: 'body', align: 'center', sortable: true }
                ]
            };
        },

        computed: {
            ...mapState({
                posts: state => state.posts.posts
            })
        },

        methods: {
            navigateComments(id) {
                router.push({ name: 'commentsForPost', params: { id }})
            }
        }
    };
</script>
