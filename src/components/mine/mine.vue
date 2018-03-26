<template>
	<div class="mine">
		{{ msg }}
        <bottom-component></bottom-component>
	</div>
</template>

<script>
import bottomComponent from "../common/bottom.vue"
import store from '@/store'

export default {
    name: 'mine',
    data() {
        return {
            msg: 'mine'
        }
    },
    created() {
        store.commit('changePage', 'mine');
        console.log(store.state.page)
    },
    components: {
        bottomComponent
    },
}
</script>

<style scoped>
</style>
