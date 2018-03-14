<template>
	<div class="bppWarp" >
		<Header @getuser='getuser' @gitcitydata="getcitydata" :incl='incl' @target='target'/>	
			<router-view />
			
		<footer>
			<ul>
				<li v-for='(val,key,index) in indexRouter'>
					<router-link :to="key"><i :class="val"></i></router-link>
				</li>
				<li><router-link :to="'/good'"><i class="el-icon-goods"></i></router-link></li>

				<li><router-link :to="user?`/my/${user}`:'/login'"><i class="el-icon-news"></i></router-link></li>
				

			</ul>

		</footer>
	</div>
		

</template>

<script>
import axios from 'axios'
import Header from '@/components/parts/header.vue'

export default {
	components:{
		'Header':Header
	}
	,
	data(){
		return({
			indexRouter:{
				'index':'el-icon-news',
				'find':'el-icon-view',
								

			},
			incl:"分类",
			citydata:[],
			user:localStorage.user

		
		})
	},
	methods:{
		target(val){
				if(val === '分类'){
					this.$router.push({path:"/classify",query:{name:"index"}})
				}
			},
		getcitydata(val){
				this.citydata = val
				console.log(this.citydata)
			},
		getuser(val){//这里没有query的user时 就不会执行
			this.user = val
			console.log(this.user)
		}
	}
}


</script>



<style scoped >
	
	/* header{
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
		background: url('../img/logo.png') no-repeat center center;
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
	}*/
	

</style>