<template>
	<div class="find">
		{{ msg }}
        <bottom-component></bottom-component>
	</div>
</template>

<script>
import bottomComponent from "../common/bottom.vue"
import store from '@/store'
export default {
    name: 'find',
    data() {
        return {
            msg: 'find'
        }
    },
    created() {
        store.commit('changePage', 'find');
        console.log(store.state.page)
    },
    components: {
        bottomComponent
    },
}
</script>

<style scoped>
</style>
