<template>
    <v-layout>
        <v-flex xs12 sm10 offset-sm1>
            <v-card>
                <v-form
                        ref="form"
                        lazy-validation
                        style="padding: 15px"
                >
                    <v-text-field
                            v-model="name"
                            :counter="10"
                            name="name"
                            label="Name"
                            required
                            :error-messages="nameErrors"
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                    ></v-text-field>


                    <v-text-field
                            v-model="email"
                            name="email"
                            label="E-mail"
                            required
                            :error-messages="emailErrors"
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                    ></v-text-field>

                    <v-text-field
                            v-model="body"
                            name="body"
                            label="Body"
                            required
                            :error-messages="bodyErrors"
                            @input="$v.body.$touch()"
                            @blur="$v.body.$touch()"
                            :counter="50"
                    ></v-text-field>

                    <v-btn
                            :disabled="$v.$invalid"
                            @click="submit"
                            color="success"
                    >
                        Save
                    </v-btn>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import { mapState } from 'vuex';
    import { validationMixin } from 'vuelidate'
    import { required, minLength, maxLength, between, email } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],

        validations: {
            name: { required, maxLength: maxLength(10) },
            email: { required, email },
            body: { required, maxLength: maxLength(50)  }
        },

        computed: {
            ...mapState({
                comment: state => state.comments.comment
            }),

            name: {
                get: function () {
                    return this.comment.name
                },
                set: function (newValue) {
                    this.comment.name = newValue;
                }
            },

            body: {
                get: function () {
                    return this.comment.body
                },
                set: function (newValue) {
                    this.comment.body = newValue;
                }
            },

            email: {
                get: function () {
                    return this.comment.email
                },
                set: function (newValue) {
                    this.comment.email = newValue;
                }
            },


            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
                !this.$v.name.required && errors.push('Name is required.')
                return errors
            },
            bodyErrors () {
                const errors = []
                if (!this.$v.body.$dirty) return errors
                !this.$v.body.maxLength && errors.push('Body must be at most 50 characters long')
                !this.$v.body.required && errors.push('Body is required.')
                return errors
            },
            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            },

        },

        methods: {
            submit () {
                this.$v.$touch()
            }
        }
    };

</script>
