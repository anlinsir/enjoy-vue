<template>
	<div class="classifyWarp">
		<Header @target='target' :incl='incl'/>
		classifyCom
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
			incl:"首页"
		})
	},
	methods:{
		target(val){
			console.log(val)
			if(val==='首页'){
				this.$router.push({path:'/index',query:{name:"classify"}})
			}
		}
	}
}

</script>
<style>
	.classifyWarp{
		width: 100%;
		display: flex;
	  	flex-direction: column;
	}
	

</style>