import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		page: 'home'
	},
	mutations: {
		changePage(state, page) {
			state.page = page;
		}
	}
})
export default store;