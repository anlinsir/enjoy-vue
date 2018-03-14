<template>
		<header class="bpp">
			<ul>
				<li @click="target">{{incl}}</li>
				<li @click="showSelectCity"><span>{{chooseCity}}</span></li>
			
				<li @click.self="login">{{user?decodeURI(user):'登录'}}<i tabindex="1" class="el-icon-search" @click="showSearch"></i>
					<ul v-show="logoutShow" class="logoutBtn">
						<li>我的订单</li>
						<li>我的礼券</li>
						<li @click="logout">退出</li>

					</ul>
				</li>

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
					
					<li  @click.self="getCity" :data-id="index"  v-for="(city,index) in citys" :style="{color:'#1a1a1a'}">
						{{city}}
					</li>
				</ul>

			</div>
			


			

		</header>	
	

</template>


<script>
import axios from 'axios'
    import {mapState,mapGetters,mapMutations} from 'vuex'

	export default {
	
		data(){
			return({
				showSearchs:false,
				showcitys:false,
				citys:[],
				chooseCity:'成都',
				showproducts:[],
				user:localStorage.user,
				logoutShow:false
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
			//console.log(decodeURI(localStorage.user))
		},
		created(){
			if(location.href.indexOf('?') != -1){
				location.href.split('?')[1].split('&').forEach((item,index)=>{
						if(item.split('=')[0] == 'user'	){
							this.user = item.split('=')[1]
							this.$emit('getuser',this.user)
						}
				})
			}
		}
		,
		mounted(){

		},
		methods:{
			showSelectCity(){
				if(location.pathname == '/index/index'){
					this.showcitys = !this.showcitys
					// 获得城市信息
					if(this.showcitys){
						axios.post('/api/headercity')
							.then((res)=>{
								this.citys = res.data.message
							})
					}	
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
				if(!this.user){
					this.$router.push({path:"/login"})
					return
				}
				if(this.logoutShow){
					this.logoutShow = false
				}else if(!this.logoutShow){
					this.logoutShow = true	
				}
				
			},
			
			getCity(e){
				console.log(e.target.innerText)
				this.chooseCity = e.target.innerText
				this.showcitys = false
			},
			logout(){
				console.log('logout')
				this.user = ''
				this.logoutShow	 = false
				this.$emit('getuser',this.user)
				this.$router.push({path:`/index`})
				localStorage.removeItem("user")
			},
		}
	}
</script>

<style>
	.logoutBtn{
		position: absolute;
		top: 11.73vw;
		right: 4vw;
		width: 30%;
		background-color: #fff;
		color: black;
		font-size: 4vw;
		box-shadow: 0.1vw 0.1vw 5.1vw -0.9vw ;
		z-index: 1000;
	}
	.logoutBtn:after{
		    content: "";
    border: 4.6vw solid #fff;
    border-top: 0.6vw solid transparent;
    border-left: 3.8vw solid transparent;
    border-right: 3.8vw solid transparent;
    width: 0;
    height: 0;
    display: block;
    position: absolute;
    right: 14vw;
    top: -3vw;
	}
	.logoutBtn>li{
		text-align: center;
	}
	.logoutBtn>li:hover{
		margin-left:3vw;
	}
	


</style>