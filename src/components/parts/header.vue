<template>
		<header class="bpp">
			<ul>
				<li @click="target">{{incl}}</li>
				<li @click="showSelectCity"><span>北京</span></li>
			
				<li @click.self="login">登录 <i class="el-icon-search" @click="showSearch"></i></li>

			</ul>
			
			<div class="showSearch" v-show="showSearchs">
				<input type="text" placeholder="search" class="headrSearch">
				<p>搜索</p>
			</div>	
			

		</header>	


</template>


<script>
	export default {
		data(){
			return({
				showSearchs:false,

			})
		},
		props:{
			incl:{
				type:null
			}
		},
		methods:{
			showSelectCity(){
				console.log("aa")
			},
			showSearch(){
				console.log("aa")
				this.showSearchs = !this.showSearchs
			},
			target(e){
				this.$emit('target',e.target.innerHTML)
			},
			login(){
				this.$router.push({path:"/login"})
			}
		}
	}
</script>

<style>

	.router-link-active{
		color: #1b1818;
	}
	.showSearch{
		position: absolute;
		height: 13vw;
		padding:1.5vw 4vw;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		width: 100%;
	}
	.showSearch>p{
		color: black;
		line-height: 8.73vw;
		margin-right: 3vw;
		text-align: center;
	}
	.headrSearch{
		border-radius: 2vw;
		width: 72vw;
		background-color: #eee;
		color: black;
		border: none;
		outline: none;
		padding: 0 2vw;
		box-sizing: border-box;
		margin-right: 5vw; 
	}
	.showSearch:after{
		position: absolute;

		    content: "";
    border: 3.2vw solid #fff;
    border-top: 3.2vw solid transparent;
    border-left: 2.6vw solid transparent;
    border-right: 2.6vw solid transparent;
    width: 0;
    height: 0;
    display: block;
    position: absolute;
    right: 3vw;
    top: -6.2vw;
	}
	header{
	height: 11.73vw;
		background-color: #1b1818;
		color: #f5f5f5;
		font-size: 4vw;
	}
	header>ul{
		display: flex;
		justify-content: space-between;

	}
	header>ul>li{
		list-style: none;
		width: 33.3%;
		line-height:11.8vw;
	}
	header>ul>li:nth-child(1){
		padding-left:  4.66vw;
		box-sizing: border-box;
		text-align: left;
		width: 25%;


	}
	header>ul>li:nth-child(2){
		background: url('../../img/logo.png') no-repeat center center;
		-webkit-background-size: 50%;
		background-size: 50%;
		position: relative;
	}
	header>ul>li:nth-child(2)>span{
		position: absolute;
		top: 1.06vw;
		left: 25.26vw;
		font-size: 3vw;
	}
	header>ul>li:nth-child(2)>span:after{
		    content: "";
    border: 1.6vw solid #fff;
    border-bottom: 1.6vw solid transparent;
    border-left: .8vw solid transparent;
    border-right: .8vw solid transparent;
    width: 0;
    height: 0;
    display: block;
    position: absolute;
    right: -2.5vw;
    top: 4.41vw;
	}

	header>ul>li:nth-child(3)>i{
		color: white;
		float: right;
		    margin-top: 3.2vw;
    margin-right: 3vw;
    font-size: 5vw;
	}


</style>