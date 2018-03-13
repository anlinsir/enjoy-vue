<template>
	<div class="detailsWarp">
		<Header @target='target' incl='首页'/>
			
		<div class="main">
			<div class="dataItem" v-for='(item,index) in data'>
				<img :src="item.basic.product_images[1].img_url">
				<p>{{item.basic.name}}</p>
				<p>{{item.basic.description}}</p>
				<div class="price">
					<span>{{item.basic.sub_product_array[0].price/100}}</span>
					<span>{{item.basic.sub_product_array[0].origin_price/100}}</span>
					<span>随时退</span>
				</div>
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


	export default{
		data(){
			return({
				data:null
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
			'Header':Header
		},
		methods:{
			target(){
				this.$router.push('/index')
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
				>img{
					width:100%;
					height: 66.66vw;
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

