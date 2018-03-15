<template>
	<div class="detailsWarp">
		<Header @target='target' incl='首页'/>
			
		<div class="main">
			<div class="dataItem" v-for='(item,index) in data'>
								      <!-- swiper -->
				      <swiper :options="swiperOption">

				       		<swiper-slide :key='index' v-for='(items,index) in item.basic.product_images'><img   :src="items.img_url"></swiper-slide>

				        <div class="swiper-pagination" slot="pagination"></div>
				      </swiper>
				 

				<!-- <img :src="item.basic.product_images[1].img_url"> -->
				<div class="bottom">
					<p class="basic_name"><span>{{item.basic.name}}</span><span :class="{actives:bools == 1}" @click="classActive">喜欢</span></p>
					<p class="basic-deri">{{item.basic.description}}</p>
					<div class="price">
						<span>{{item.basic.sub_product_array[0].price/100}}</span>
						<span>{{item.basic.sub_product_array[0].origin_price/100}}</span>
						<span>随时退</span>
					</div>
				</div>
				<!--    DSDS -->

			</div>
			
		</div>
		
		<footer>
			<ul class="footer_ul">
				<li class="toCar"> <span class="bag">{{num | nums}}</span><i class="iconfont icon-gouwuche"></i></li>
				<li class="addCar" @click="addProducts">加入购物车</li>
				<li class="buyNow">即刻购买</li>
			</ul>
		</footer>
	</div>
</template>


<script type="text/javascript">
import Header from '@/components/parts/header.vue'
import axios from 'axios'
import {mdCard,mdCardMedia} from 'vue-awesome-swiper'


	export default{

		data(){
			return({
				data:null,
				bools:false
				,
				ID:null
				,
				num:0
				,
				saveData:localStorage.car,
				 swiperOption: {
				          pagination: {
				            el: '.swiper-pagination',
				            dynamicBullets: true
				          }
				        }
			})
		},
		beforeRouteLeave (to, from, next) {
			console.log(this.saveData)			
			if(!this.saveData ){
				next()
			 return
			}
				var pro = JSON.parse(this.saveData)
				pro = pro[0]
			axios.post('/api/savecar',pro)
				.then(function(res){
					console.log(res)
					next()
				})

			
			//离开页面时保存local
		},
		/*beforeRouteEnter (to, from, next){
			console.log(to)
		}
		,*/
		beforeCreate(){
						var pro = {id:this.$route.params.Id} 
			axios.post('/api/initdetail',pro).then((res)=>{
				console.log(res.data.msg)
				this.ID = res.data.msg.basic.sub_product_id
				console.log(this.ID)
				this.data = [res.data.msg]
			})
			var name = {name:localStorage.user}
			axios.post('/api/findcar',name)
				.then((res)=>{
					console.log(res.data.msg)
					var isuser = res.data.msg.filter(function(item){
						return item.user == localStorage.user 
					})
					this.num = isuser[0].peo.length
				})
		},
		mounted(){

		},
		components:{
			'Header':Header,
			'md-card':mdCard,
			'md-card-media':mdCardMedia
		},
		methods:{
			target(){
				this.$router.push('/index')
			},
			classActive(){
				this.bools = !this.bools
			},
			addProducts(){
				  //增加商品种类的的数量商品数量的数量不在这里定义 
				if(!localStorage.user){//如果没有用户名就跳转到login
					this.$router.push('/login')
					return
					localStorage.removeItem('car')
				}
				var _pro = localStorage.car?JSON.parse(localStorage.car):[]
				//如果localStorage.user == _pro中的一项的user 就增加 ——pro[i].peo
				//离开时存到数据库里 把local删除
				if(_pro.length != 0){
						for(var  i=0;i<=_pro.length;i++){							
							/********************************/
							if(_pro[i].user == localStorage.user){
							/********************************/		
									for(var j = 0 ; j<_pro[i].peo.length;j++){//在判断——pro.peo的每一项的id  是否与this.id相等
											if(_pro[i].peo[j].ID == this.ID){
												_pro[i].peo[j].sum +=1

												localStorage.setItem('car',JSON.stringify(_pro))
												this.saveData = localStorage.car

								 				console.log(_pro,localStorage.car,this.saveData)

												return
											}
									}
							/********************************/		
								this.num +=1
								_pro[i].peo.push({ID:this.ID,sum:1})
								
								localStorage.setItem('car',JSON.stringify(_pro))
								this.saveData = localStorage.car
					 				console.log(_pro,localStorage.car,this.saveData)

								return
							}



					}


				}


				this.num +=1

				_pro.push({peo:[{ID:this.ID,sum:1}],user:localStorage.user})
				
				localStorage.setItem('car',JSON.stringify(_pro))
				this.saveData = localStorage.car
				console.log(_pro,localStorage.car,this.saveData)

				
									
				
				


			}
		},
		filters: {
			  nums(num){
			  		if(num>=0&&num<=99){
			  			return num 
			  		}else{
			  			return num = 99+'+'
			  		}
			  },
		}
	}

</script>


<style lang='scss' scoped>
	.detailsWarp{
		height: 100%;
		display: flex;
		flex-direction: column;
		>.main{
			flex: 1;
			height: 50vw;
			overflow: auto;
			color: black;
			>.dataItem{
				width: 100%;
				
							>.swiper-container{
								width: 100%;
							height: 66.6vw !important; 
								.swiper-wrapper{
							width: 100%;
							height: 66.6vw !important; 
								>.swiper-slide-active{
									width: 100%;
								height: 66.6vw;
										>img{
									width:100%;
										height: 66.66vw;
									}	
								}
									
							
					}					
				}
				>.bottom{
					width: 100%;
					min-width: 50vw;
					padding:5.33vw;
					text-align: left;
					box-sizing: border-box;
					>.basic_name{
						display: flex;
						justify-content: space-between;
						font-size: 5.5vw;
						font-weight: 600;
						:nth-child(1){
							width: 90%;

						}
						:nth-child(2){
							font-size: 4vw;
					
						}
						.actives{
							color: red;
						}
					}
					>.basic-deri{
						font-size: 4.5vw;
						color: #92969c;
					}
					>.price{
						:nth-child(1){
							color: red;
							font-size: 6vw;
						}
						:nth-child(2){
							color:#92969c;
							text-decoration: line-through;
							padding-right: 5vw;
							border-right: 1px solid #92969c;  
						}
						:nth-child(3){
							font-size: 4.5vw;
							color:#92969c;
						}
					}
				}
			
				
			}
		}



		footer{
			height: 16vw;
			>.footer_ul{
				width: 100%;
				height: 16vw;
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				>li{
					
					text-align: center;
					line-height: 16vw;
					color: white;
					font-size: 4.5vw;					
				}
				>.toCar{
					color: black;
					width: 20%;
					position: relative;
					>.icon-gouwuche:before{
						font-size:10.5vw;
					}
					>.bag{
						position: absolute;
						top: 2vw;
						right: 3vw;
						background-color: red;
						color: white;
						display: inline-block;
						font-size: 3vw;
						width: 5vw;
						text-align: center;
						line-height: 5vw;
						border-radius: 50%;
						height: 5vw;
					}
				}
				>.addCar{
					width: 40%;
					    background-color: #ffb22a;
				}
				>.buyNow{
					width: 40%;
					background-color: #ff3939
				}
			}
		}
	}


</style>

