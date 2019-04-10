<template>
    <div>
        <div class="c-content-container" v-if="display == 'true'">
            <div
                class="traffic-lights"
                v-bind:class="env">
            </div>
        </div>
    </div>
</template>


<script>

    export default {

        computed: {
            env () {
                return process.env.APP_ENV;
            },

            display() {
                return process.env.TRAFFIC_LIGHTS_DISPLAY;
            }
        },

    };
</script>
