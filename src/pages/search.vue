<template>
	<div class="searchWarp">
	<div @click="gettop" class="top">top</div>
		<div class="flexWarp">
			<Header @target='target' incl='首页'></Header>
			<ul  class="choose">
				<li>全部</li>
				<li @click='chootrue'>{{choose}}
					
				</li>

			</ul>
			<ul v-show="chooShow" class="choo">
				<li @click='chootrues(index,$event)' :class="{active:current==index}" v-for='(item,index) in choo'>{{item}}</li>
						
			</ul>			
		</div>
		<div class="mian">
			<ul class="mainContainer">
				<li v-for='(item,index) in searchItem'>					
						<img :src="item.product_image">
						<div class="desc">
							<p class="proName">{{item.name}}</p>
							<p class="price">
								<span>{{item.price/100}}元/{{item.entity_name}}</span>
								<span>¥{{item.original_price/100}}</span>
							</p>
							<p></p>
						</div>
					
				</li>
			</ul>
		</div>

	</div>

</template>


<script>
import Header from '@/components/parts/header.vue'
	export default {
		components:{
		'Header':Header
	}
	,
		data(){
			return({
				choose:"智能排序"
				,
				choo:['智能排序','离我最近','价格最低','价格最高']
				,
				chooShow:false
				,
				current:-1
				,
				key:"",
				searchItem:[	
						{
					        "area":"大望路",
					        "distance":0,
					        "enjoy_url":"enjoyapp://product/detail?id=1030835",
					        "entity_name":"份",
					        "favorite_num":0,
					        "is_favorite":false,
					        "is_new":false,
					        "left_count":4906,
					        "merchant_id":1491,
					        "name":"北京丽思卡尔顿酒店 Barolo 周日单人 Brunch",
					        "offline_time":1519833540000,
					        "original_price":33120,
					        "postage_free":false,
					        "price":28800,
					        "product_id":1030835,
					        "product_image":"https://image.ricebook.com/business/19839819323228",
					        "product_type":0,
					        "refund_type":2,
					        "sell_state":5,
					        "shelving_time":1487174400000,
					        "short_description":"8道美馔打造的丰盛早午餐体验",
					        "short_name":"北京丽思卡尔顿酒店 Barolo 周日单人 Brunch",
					        "show_entity_name":"位",
					        "stunt":"超值精选",
					        "sub_product_id":5064513,
					        "sub_product_id_list":[
					            5064513
					        ]
					    },
					    {
					        "distance":0,
					        "enjoy_url":"enjoyapp://product/detail?id=1044757",
					        "entity_name":"份",
					        "favorite_num":0,
					        "is_favorite":false,
					        "is_new":false,
					        "left_count":4976,
					        "merchant_id":2095,
					        "name":"北京四季酒店 Mio 意大利餐厅单人餐",
					        "offline_time":1519228740000,
					        "original_price":85800,
					        "postage_free":false,
					        "price":58800,
					        "product_id":1044757,
					        "product_image":"https://image.ricebook.com/business/21534065123986",
					        "product_type":0,
					        "refund_type":2,
					        "sell_state":5,
					        "shelving_time":1504137600000,
					        "short_description":"四道式主厨精选料理配酒",
					        "short_name":"北京四季酒店 Mio 意大利餐厅单人餐",
					        "show_entity_name":"位",
					        "sub_product_id":5094739,
					        "sub_product_id_list":[
					            5094739
					        ]
					    }


					    ],
			})
		}
		,
		beforeCreate(){
			this.key = this.$route.query.key
			console.log(this.key)
		},
		methods:{
			target(val){
				if(val == '首页'){
					this.$router.push('/index')
				}
			
			},
			chootrue(e){
				this.chooShow = !this.chooShow

			},
			chootrues(index,e){
				this.chooShow = !this.chooShow
				this.current = index				
				this.choose = e.target.innerText

			},
			gettop(){
				//回到顶部
				document.documentElement.scrollTop = 0
				
			}
		}

	}

</script>



<style lang='scss' scoped>
.active{
	color: red;
}
.top{
	position: fixed;
	width: 15vw;
	height: 15vw;
	background-color: white;
	color: black;
	border-radius: 50%; 
	bottom: 10%;
	right: 10%;
	box-shadow: 0vw .2vw .1vw .1vw;
	font-size: 4vw;
	line-height: 15vw;
	text-align: center;
}
	.searchWarp{
		.flexWarp{
			>.choose{
				display: flex;
				padding: 2.5vw 0 ;
				box-sizing: border-box;
				border-bottom: .1vw solid #BDC0C3;
				font-size: 4vw;
				color: #2c3038;
				>li{
					width: 50%;
				}
				>li:nth-child(1){
					border-right: .1vw solid #BDC0C3;
				}
				>li:nth-child(2):after{
					     content: "";
					    border: 1.6vw solid black;
					    border-bottom: 0.6vw solid transparent;
					    border-left: 0.8vw solid transparent;
					    border-right: 0.8vw solid transparent;
					    width: 0;
					    height: 0;
					    display: block;
					    position: absolute;
					    right: 13vw;
					    top: 16vw;
   
				}
			}
			>.choo{
				position: absolute;		
				width: 100%;
				font-size: 4vw;
				color: #2c3038;
				background-color: #fff;
				>li{
					height: 10.66vw;
					border-bottom:.1vw solid #BDC0C3;
					line-height: 10.66vw;

				}
			}
		}
	}
	.mian{
		.mainContainer{
			width: 100%;
			min-height: 100%;
			>li{
				width: 100%;
				display: flex;
				padding: 4vw;
				box-sizing: border-box;
				border-bottom: .1vw solid #BDC0C3;
				font-size: 4vw;

				>img{
					width: 46vw;
					height: 30.66vw;
					margin-right:4vw; 
				}
			}
		}
		.proName{
			width:42.6vw ;
			height: 16vw;
			margin-bottom: 3vw; 
			text-align: left;
		}
		.price{
			width:42.6vw ;
			height: 5.33vw;
			display: flex;
			>span:nth-child(1){
				margin-right: 3vw; 
				color: red;
			}
			>span:nth-child(2){
				text-decoration: line-through;
   				 color: #92969c;
			}
		}
	}
</style>

