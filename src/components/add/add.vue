<template>
	<div class="add">
		{{ msg }}
        <bottom-component></bottom-component>
	</div>
</template>

<script>
import bottomComponent from "../common/bottom.vue"
import store from '@/store'
export default {
    name: 'add',
    data() {
        return {
            msg: 'add'
        }
    },
    created() {
        store.commit('changePage', 'add');
        console.log(store.state.page)
    },
    components: {
        bottomComponent
    },
}
</script>

<style scoped>
</style>
