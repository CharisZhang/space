<template>
	<div class="sortHeader">
		<a class="back_icon">
			<img @click="back" :src="img.backPic">
		</a>
		<div class="header_title">
			<h3>分类</h3>
		</div>
		<div class="sort_list_box">
			<select v-model="sortType">
			  	<option value="1">Volvo</option>
			  	<option value="2">Saab</option>
			  	<option value="3">Opel</option>
			</select>
		</div>
	</div>
</template>

<script>
import backPic from '../../assets/images/common/back.png';

export default {
	name: 'sortHeader',
	data() {
		return {
			msg: 'header',
			sortType:1,
			img: {
				backPic: backPic
			},

		}
	},
	created(){
		
	},
	methods: {
		back: function() {
            history.back()
		}
	},
}
</script>

<style scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	background-color: #fff;
	height: 44px;
	width: 100%;
	border-bottom: 1px solid #E4E4E4;
	box-shadow: 0 0 10px 2px #ddd;
}
.back_icon,.header_title,.sort_list_box{
	display: block;
	float: left;
	text-align: center;
	line-height: 44px;
	height: 100%;
}
.header_title{
	width: 60%;
	padding-left: 10%;
}
.back_icon{
	width: 15%;
}
.sort_list_box{
	width: 25%
}
.back_icon img{
	display: block;
	margin: 10px auto;
	height: 24px;
	width: 24px;
}
</style>
