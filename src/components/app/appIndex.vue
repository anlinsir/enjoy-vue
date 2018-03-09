<template>
	<div class="appIndex">
		<ul class="indexUl">			
			<li class="productItemMain" v-for='item in showproducts'>
			<!-- <div class="productItemHeader" v-for='item in showproducts' v-if="item.header">
				<p class="productItemHeaderTitle">{{item.header.title}}</p>
				<p class="productItemHeaderDesc">{{item.header.desc}}</p>
			
			</div> -->
				<a href="#">
					<img :src="item.url">
					<p class="productItemTitle">{{item.title}}</p>
					<p class="productItemDesc">{{item.desc}}</p>

				</a>
			</li>
		</ul>

		
	</div>
</template>


<script>
import axios from 'axios'

export default {
	props:{
	


	},
	data(){
		return({
			showproducts:[]
		})
	}
	,
	beforeCreate(){
		console.log("加载数据")
		axios.post('/api/initdata')
				.then((res)=>{
					this.showproducts = res.data.msg
					console.log(this.showproducts)

				})
	}

}

</script>

<style scoped>
	.appIndex{
		flex: 1;
		height: 50vw;
		overflow: auto;
		color: black;

	}

	.indexUl{
			box-sizing: border-box;
		padding-left: 6vw; 	
		padding-right: 5vw; 	

	}
	.indexUl>li{
		width: 100%;
		margin: 5.33vw 0;
		text-align: left;

	}
	.productItemMain{
		border-bottom:  .1vw solid #e0e0e0;	
		padding-bottom: 5vw;
		box-sizing: border-box;		
	}
	.indexUl>li>a{

	}
	.indexUl>li>a>img{
		width: 89.33vw;
		height: 59.46vw;
	}
	.indexUl>li>a>.productItemTitle{
		font-size: 4.26vw;
		color: #2c3038;
		margin-top:2vw; 
	}
	.indexUl>li>a>.productItemDesc{
		color: #92969c;

		margin-top:.5vw; 
		font-size: 2.23vw;

	}
	.productItemHeaderTitle{
	    font-size: 5.67vw;
	    font-weight: bolder;
	    color: #2c3038;
	}
	.productItemHeaderDesc{
	    font-size: 2.6vw;
	    color: #ff3939;

	}



</style>

