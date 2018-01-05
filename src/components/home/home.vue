<template>
    <div class="home">
        <h1>hello</h1>
        <button v-on:click="init">CLICK</button>
        <bottom-component></bottom-component>
    </div>
</template>

<script>
    import bottomComponent from "../common/bottom.vue"

    export default {
        name: 'home',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            init: function () {
                var vm = this
                vm.$http.post('/api/login', {}).then((response) => {
                    console.log(response)
                })
            }
        },
        components: {
            bottomComponent
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
