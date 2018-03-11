<template>
	<div class="searchWarp">
		search
		

	</div>

</template>


<script>
	export default {
		data(){
			return({
				key:""
			})
		}
		,
		beforeCreate(){
			this.key = this.$route.query.key
			console.log(this.key)
		}

	}

</script>



<style lang='scss' scoped>
	
</style>

