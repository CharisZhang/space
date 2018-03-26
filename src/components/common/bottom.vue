<template>
	<div class="bottom">
		<a @click="change('home')">
			<img :src="$store.state.page=='home'?img.homeActivePic:img.homePic">
			<p>主页</p>
		</a>
		<a @click="change('sort')" to="/sort">
			<img :src="$store.state.page=='sort'?img.sortActivePic:img.sortPic">
			<p>分类</p>
		</a>
		<a @click="change('add')" to="/add">
			<img :src="$store.state.page=='add'?img.addActivePic:img.addPic">
			<p>+</p>
		</a>
		<a @click="change('find')" to="/find">
			<img :src="$store.state.page=='find'?img.findActivePic:img.findPic">
			<p>发现</p>
		</a>
		<a @click="change('mine')" to="/mine">
			<img :src="$store.state.page=='mine'?img.mineActivePic:img.minePic">
			<p>我的</p>
		</a>
	</div>
</template>

<script>
import homePic from '../../assets/images/common/footer_home.png';
import sortPic from '../../assets/images/common/footer_sort.png';
import addPic from '../../assets/images/common/footer_add.png';
import findPic from '../../assets/images/common/footer_find.png';
import minePic from '../../assets/images/common/footer_mine.png';
import homeActivePic from '../../assets/images/common/footer_active_home.png';
import sortActivePic from '../../assets/images/common/footer_active_sort.png';
import addActivePic from '../../assets/images/common/footer_active_add.png';
import findActivePic from '../../assets/images/common/footer_active_find.png';
import mineActivePic from '../../assets/images/common/footer_active_mine.png';

import store from '@/store'
export default {
	name: 'bottom',
	data() {
		return {
			msg: 'bottom',
			page: 1,
			img: {
				homePic: homePic,
				sortPic: sortPic,
				addPic: addPic,
				findPic: findPic,
				minePic: minePic,
				homeActivePic: homeActivePic,
				sortActivePic: sortActivePic,
				addActivePic: addActivePic,
				findActivePic: findActivePic,
				mineActivePic: mineActivePic,
			},

		}
	},
	created(){
		
	},
	methods: {
		change: function(page) {
			// store.commit('changePage',page)
			this.$router.push({ path: page })
		}
	},
}
</script>

<style scoped>
.bottom {
	position: fixed;
	bottom: 0;
	left: 0;
	margin: 0;
	padding: 0;
	background-color: #fff;
	height: 50px;
	width: 100%;
	border-top: 1px solid #E4E4E4;
	box-shadow: 0 0 10px 2px #ddd;
	padding-top: 7px;
}
.bottom img{
	width: 20px;
}
.bottom > a{
	display: block;
	text-align: center;
	float: left;
	margin: 0;
	padding: 0;
	width: 20%;
}
.bottom p{
	line-height: 1em
}
</style>
