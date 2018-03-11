<template>
	<div class="classifyWarp">
		<Header @target='target' :incl='incl'/>
		<div class="classifulist">
			<div v-for="(item,index) in classifyList" class="listItem">
				<p>{{item.title}}</p>
				<ul>
					<li @click="getSearch" v-for="(pros,index) in item.content">{{pros}}</li>

				</ul>
			</div>


		</div>
	</div>

</template>
<script>
	import Header from '@/components/parts/header.vue'
export default {
	components:{
		"Header":Header
	},
	data(){
		return({
			incl:"首页",
			classifyList:[
					{
						title:"本地餐厅",
						content:['西餐','日本料理','火锅','中国菜','咖啡甜点','自助餐','东南亚菜','烧烤','素食轻食','海鲜','韩国料理','酒吧']
					},
					{
						title:'美容健身',
						content:['美容SPA','健身','美发','美甲美睫']
					}
					,
					{
						title:'本地送',
						content:['甜品','外送','同城活动','中秋月饼']
					}
					,
					{
						title:'活动课程',
						content:['趣味课程','同城活动']
					}


				]
		})
	},
	methods:{
		target(val){
			console.log(val)
			if(val==='首页'){
				this.$router.push({path:'/index'})
			}
		},
		getSearch(e){
			console.log(e.target.innerText)
			this.$router.push({path:`/search`,query:{key:e.target.innerText}})
		}
	}
}

</script>
<style lang="scss" scoped>
	.classifyWarp{
		width: 100%;
		display: flex;
	  	flex-direction: column;
	  	font-size: 4vw;	
	  	>.classifulist{
	  		width: 100%;
	  		min-height: 20vw;
	  		>.listItem{
	  			>p{
	  				height: 10.13vw;
	  				background-color: #eee;
	  				line-height: 10vw;
	  				padding-left:5vw;
	  				text-align: left; 

	  			}
	  			>ul{
	  				display: flex;
	  				justify-content:flex-start;
	  				flex-wrap: wrap;
	  				border-collapse:collapse;

	  				>li{
	  					width: 33.49%;	
	  					height: 12.5vw;
	  					border: .1px solid #eee;
	  					line-height: 12.5vw;
	  					/*解决边框重合的办法*/
	  					margin-right:-1px;
	  					margin-bottom:-1px;



	  				}
	  			}
	  		}
	  	}
	}

	

	

</style>