<template>
	<div class="appIndex">
		<ul class="indexUl">			
			<li  :data-id="item.id" class="productItemMain" v-for='(item,index) in showproducts'>
			 <div class="productItemHeader">
				<p class="productItemHeaderTitle">{{item.group_section.title}}</p>
				<p class="productItemHeaderDesc">{{item.group_section.desc}}</p>
			
			</div>
				<div @click="getDetails(items.enjoy_url)" class="newa" v-for="(items,index) in item.tabs">
				<a  href="#">
					<img :src="items.url">
					<p class="productItemTitle">{{items.desc}}</p>
					<p class="productItemDesc">{{items.title}}</p>

				</a>
				</div>
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

				})
	},
	methods:{
		getDetails(id){
			var Id = id.split('?')[1].split('&')[0].split('=')[1]
			 this.$router.push(`/details/${Id}`)

		}
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
	.indexUl>li>.newa{
		margin-bottom: 10vw;
	}
	.indexUl>li>.newa>a>img{
		width: 89.33vw;
		height: 59.46vw;
	}
	.indexUl>li>.newa>a>.productItemTitle{
		font-size: 4.26vw;
		color: #2c3038;
		margin-top:2vw; 
	}
	.indexUl>li>.newa>a>.productItemDesc{
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
	    margin-bottom: 5vw;

	}



</style>

