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
	
	


</style>