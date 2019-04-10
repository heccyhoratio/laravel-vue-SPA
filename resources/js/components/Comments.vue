<template>
    <div>
        <div class="c-content-container" >
            <template>
                <v-data-table
                        :headers="headers"
                        :items="comments"
                        class="elevation-1"
                >
                    <template v-slot:items="props">
                        <td>{{ props.item.id }}</td>
                        <td>{{ props.item.name }}</td>
                        <td>{{ props.item.body }}</td>
                        <td><v-btn color="info" @click="navigateComment(props.item.id)">Edit Comment</v-btn></td>
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
                    { text: 'name', value: 'name', align: 'center', sortable: true },
                    { text: 'body', value: 'body', align: 'center', sortable: true }
                ]
            };
        },

        components: {

        },

        computed: {
            ...mapState({
                comments: state => state.comments.comments
            })
        },

        methods: {
            navigateComment(id) {
                if (this.$route.params.id) {
                    router.push({ name: 'commentForPost', params: { postid: this.$route.params.id, commentid: id }})

                } else {
                    router.push({ name: 'comment', params: { id }})

                }
            }
        }
    };
</script>