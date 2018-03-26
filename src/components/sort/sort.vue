<template>
	<div class="sort">
        <header-component></header-component>
        <div class="sort_page">
            <div class="sort_left"></div>
            <div class="sort_right">
                {{ msg }}
            </div>  
        </div>
        	
	</div>
</template>

<script>
import headerComponent from "./sortHeader.vue"
import store from '@/store'
export default {
    name: 'sort',
    data() {
        return {
            msg: 'sort'
        }
    },
    created() {
        store.commit('changePage', 'sort');
        console.log(store.state.page);
    },
    components: {
        headerComponent
    },
}
</script>

<style scoped>
.sort,.sort_page{
    height: 100%;
    width: 100%;
}
.sort_page{
    padding-top: 44px;
}
.sort_left{
    width: 20%;
    float: left;
    background-color: #ccc;
    height: 100%;
}
.sort_right{
    width: 80%;
    float: left;
    background-color: #ddd;
    height: 100%;
}
</style>
