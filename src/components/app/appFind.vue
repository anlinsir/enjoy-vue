<template>
	<div class="appIndex">
		  <div class="block">
		    <div class="demonstration">	
				<h3>今日推荐</h3>
				<p>全方位的生活指南，每天都有新乐趣 <span><i>{{CarouselGetNum+1}}</i> / {{CarouselItem.length}}</span></p>

		    </div>
		     <carousel-3d @after-slide-change="onAfterSlideChange" :autoplay="true" :autoplay-timeout="3000" :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'">
			    <slide :key="index"  :index="index" v-for="(item,index) in CarouselItem">
			      <img :src="item.img" />
			      <p class="text1">{{item.text1}}</p>
				  <p class="text2">{{item.text2}}</p>
				  <p class="text3">{{item.text3}}</p>

			    </slide>
			   
			  </carousel-3d>
		

		  </div>
		  <!-- choose commodity -->
		  <div>
			<div class="chooseCommodity" v-for="(item,index) in chooseCommodity">
				<div class="CommodityFlex" >
				<h3>{{item.title}}</h3>
				<a href="#">{{item.more}}</a>
				</div>

				<div class="desc">{{item.desc}}</div>

				<ul>
					<li v-for="img in item.img">
							<img :src="img">
					</li>

				</ul>

			</div>
		</div>
	</div>
</template>


<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import axios from 'axios'
export default {
	data(){
		return({
			CarouselNum:4,
			CarouselGetNum:0,
			CarouselItem:null,
			chooseCommodity:[
				{
					title:"优选美酒",
					more:"查看更多",
					desc:"本周上架10款精品，10款新品",
					img:['https://image.ricebook.com/business/20298057023194?imageView2/1/w/210/h/210','https://image.ricebook.com/business/1498617437340002?imageView2/1/w/210/h/210','https://image.ricebook.com/business/20315504823398?imageView2/1/w/210/h/210']
				},
				{
					title:"优选美酒",
					more:"查看更多",
					desc:"本周上架10款精品，10款新品",
					img:['https://image.ricebook.com/business/20298057023194?imageView2/1/w/210/h/210','https://image.ricebook.com/business/1498617437340002?imageView2/1/w/210/h/210','https://image.ricebook.com/business/20315504823398?imageView2/1/w/210/h/210']
				},
				{
					title:"优选美酒",
					more:"查看更多",
					desc:"本周上架10款精品，10款新品",
					img:['https://image.ricebook.com/business/20298057023194?imageView2/1/w/210/h/210','https://image.ricebook.com/business/1498617437340002?imageView2/1/w/210/h/210','https://image.ricebook.com/business/20315504823398?imageView2/1/w/210/h/210']
				}
			]


		})
	},
	  beforeRouteLeave (to, from, next) {
		  	setTimeout(function(){
		  		console.log('aaa')
		  		next()
		  	},2000)
	    },
	beforeCreate(){
		axios.post('/api/initfindcarousel')
			.then((res)=>{
				this.CarouselItem = res.data.msg
				console.log(this.CarouselItem)

			})
	},
	methods:{
		onAfterSlideChange(index){
			this.CarouselGetNum = index
		}
	},
	components:{
		Carousel3d,
	    Slide
	}

}

</script>

<style  scoped>
	.appIndex{
		flex: 1;
		height: 50vw;
		overflow: auto;
	}
.demonstration{
	text-align: left;
	padding: 0 5vw;
	padding-top:8vw;
	box-sizing: border-box; 
	position: relative;

}
.demonstration>h3{
	font-size: 6vw;
}
.demonstration>p{
	font-size: 2vw;
	color: #92969c;
}
.demonstration>p>span{
	position: absolute;
    /* font-size: 5vw; */
       top: 8.4vw;
    right: 5.4vw;
}
.demonstration>p>span>i{
	font-size: 5vw;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .carousel-3d-container>.carousel-3d-slider{
  	 widows: 40vw;
  	 height:23.73vw;
  }
  .text1{
  	font-size: 1.2vw;
  	color: red;
  }
  .text2{
  	font-size: 4.2vw;
  	font-weight: 600;
  }
  .text3{
  	font-size: .5vw;
	color: #92969c;

  }
  .chooseCommodity{
  	width: 90%;
  	min-height: 30vw;
  	border-bottom:1px solid red;
  	box-sizing: border-box;
  	padding: 8vw 0;
  	margin-left:5.33vw;
  	margin-right:5.33vw;
  }
  .chooseCommodity>.CommodityFlex{
  	display: flex;
  	justify-content: space-between;
  }
  .chooseCommodity>.CommodityFlex>a{
  	font-size: 4vw;
  	color: #ff3939;
  }
  >.CommodityFlex>h3{
  		font-weight: bolder;
    color: #2c3038;
      font-size: 5.6vw;
  }
    
  .chooseCommodity>.desc{
    color: #92969c;
    font-size: 2.93vw;
    margin-top: 1.33vw;
    text-align: left;
}
	.chooseCommodity>ul{
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	.chooseCommodity>ul>li{
		width: 28vw;
		height: 28vw;
	}
	.chooseCommodity>ul>li>img{
		width: 100%;
		height: 100%;
	}

</style>

