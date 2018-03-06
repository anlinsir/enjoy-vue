<template>
		<header class="bpp">
			<ul>
				<li @click="target">{{incl}}</li>
				<li @click="showSelectCity"><span>{{chooseCity}}</span></li>
			
				<li @click.self="login">登录 <i class="el-icon-search" @click="showSearch"></i></li>

			</ul>
			<!-- 搜索键 -->
			<div class="showSearch" v-show="showSearchs">
				<input type="text" placeholder="search" class="headrSearch">
				<p>搜索</p>
			</div>
			<!-- 选择城市键 -->
			<div v-show="showcitys" class="showCity">
				<p :style="{color:'#1a1a1a',textAlign:'left',marginLeft:'4vw',marginTop:'8vw',marginBottom:'3vw'}" :data-id='-1'>本地服务开通城市</p>
				<ul class="displayCity">
					
					<li @click.self="getCity" :data-id="index"  v-for="(city,index) in citys" :style="{color:'#1a1a1a'}">
						{{city}}
					</li>
				</ul>

			</div>
			


			

		</header>	


</template>


<script>
import axios from 'axios'

	export default {
		data(){
			return({
				showSearchs:false,
				showcitys:false,
				citys:[],
				chooseCity:'北京',
				showproducts:[]
			})
		},
		props:{
			incl:{
				type:null
			}
		},
		beforeCreate(){
			axios.post('/api/initdata')
				.then((res)=>{
					this.showproducts = res.data.msg
					this.$emit('gitcitydata',this.showproducts)

				})
		}
		,
		mounted(){

		},
		methods:{
			showSelectCity(){
				this.showcitys = !this.showcitys
				// 获得城市信息
				if(this.showcitys){
					axios.post('/api/headercity')
						.then((res)=>{
							this.citys = res.data.message
						})
				}


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
			},
			getCity(e){
				console.log(e.target.innerText)
				this.chooseCity = e.target.innerText
				this.showcitys = false
			}
				
		}
	}
</script>

<style>
	
	.router-link-active{
		color: #1b1818;
	}
	.showCity{
		width: 100%;
		height: 94%;
		position: absolute;
		background-color: #fff;
	}
	.displayCity{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.displayCity>p{
		font-size: 6vw;
	}
	.displayCity>li{
		    margin: 2vw 0vw;
		    border: .13vw solid #1a1a1a;
		    width: 28vw;
		    height: 7vw;
		    font-size: 3.5vw;
		    text-align: center;
		    line-height: 7.3vw;
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