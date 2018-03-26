<template>
    <div class="home">
        <h1>hello</h1>
        <button v-on:click="init">CLICK</button>
        <bottom-component></bottom-component>
    </div>
</template>

<script>
import bottomComponent from "../common/bottom.vue"
import store from '@/store'
import {setCookie, getCookie} from '../../assets/js/util'

export default {
    name: 'home',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    created(){
        store.commit('changePage','home');
        console.log(store.state.page)
        this.init();
    },
    methods: {
        init: function () {
            var vm = this;
//            setCookie('userName', 'CharisZhang', 2)
            console.log(getCookie('userSex'))
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
