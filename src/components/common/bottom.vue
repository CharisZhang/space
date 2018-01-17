<template>
	<div class="bottom">
		<router-link to="/">
			<img :src="homePic">
			<p>主页</p>
		</router-link>
		<router-link to="/sort">
			<img :src="sortPic">
			<p>分类</p>
		</router-link>
		<router-link to="/add">
			<img :src="addPic">
			<p>+</p>
		</router-link>
		<router-link to="/find">
			<img :src="findPic">
			<p>发现</p>
		</router-link>
		<router-link to="/mine">
			<img :src="minePic">
			<p>我的</p>
		</router-link>
	</div>
</template>

<script>
import homePic from '../../assets/images/common/footer_home.png';
import sortPic from '../../assets/images/common/footer_sort.png';
import addPic from '../../assets/images/common/footer_add.png';
import findPic from '../../assets/images/common/footer_find.png';
import minePic from '../../assets/images/common/footer_mine.png';
export default {
  name: 'bottom',
  data () {
    return {
      msg: 'bottom',
      homePic: homePic,
      sortPic: sortPic,
      addPic: addPic,
      findPic: findPic,
      minePic: minePic
    }
  }
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
</style>
