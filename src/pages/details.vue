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
				<li class="toCar"><i class="iconfont icon-gouwuche"></i></li>
				<li class="addCar">加入购物车</li>
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
				 swiperOption: {
				          pagination: {
				            el: '.swiper-pagination',
				            dynamicBullets: true
				          }
				        }
			})
		},
		beforeCreate(){
			var pro = {id:this.$route.params.Id} 
			axios.post('/api/initdetail',pro).then((res)=>{
				console.log(res.data.msg)
				this.data = [res.data.msg]
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
			}
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
					>.icon-gouwuche:before{
						font-size:10.5vw;
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

