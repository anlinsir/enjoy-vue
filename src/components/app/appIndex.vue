<template>
	<div class="appIndex">
		<ul class="indexUl">
			<li v-for='item in showproducts'>
				<a href="#">
					<img :src="item.url">
					<p>{{item.title}}</p>
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
		axios.post('/api/initdata')
				.then((res)=>{
					this.showproducts = res.data.msg
					console.log(this.showproducts)

				})
	}

}

</script>

<style>
	.appIndex{
		flex: 1;
		height: 50vw;
		overflow: auto;
		color: black;
	}
	.indexUl>li{
		margin: 5.33vw 0;
	}
	.indexUl>li>a{

	}
	.indexUl>li>a>img{
		width: 89.33vw;
		height: 59.46vw;
	}
	.indexUl>li>a>p{
		color: black;
	}



</style>

