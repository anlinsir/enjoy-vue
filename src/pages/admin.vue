<template>
	<div>
		admin

		<button @click="getcitydatas">dsdsdsd</button>
	</div>


</template>


<script>
import axios from 'axios'

export default{
	methods:{
		
		getcitydatas(){
			var pro ={
 "trace_meta":"JTdCJTIyX3VyaSUyMiUzQSUyMiUyRnYxJTJGd2ViJTJGd2Vla19jaG9pY2UuanNvbiUyMiUyQyUyMl9xdWVyeSUyMiUzQSUyMnBhZ2UlM0QwJTI2Y2l0eV9pZCUzRDEwNCUyMiUyQyUyMnByaWNlJTIyJTNBJTIyMjk4JTIyJTJDJTIyaWQlMjIlM0ElMjI1MDg4MDE3JTIyJTJDJTIydGl0bGUlMjIlM0ElMjIlRTclOTAlQTUlRTclOEYlODAlRTUlQTQlOEYlRTYlOTclQTUlRTUlQjAlOEYlRTklQkUlOTklRTglOTklQkUlRTUlOUIlOUIlRTQlQkElQkElRTYlOTklOUElRTklQTQlOTAlMjIlMkMlMjJ0eXBlJTIyJTNBJTIycHJvZHVjdCUyMiUyQyUyMmVuam95VXJsJTIyJTNBJTIyZW5qb3lhcHAlM0ElMkYlMkZwcm9kdWN0JTJGZGV0YWlsJTNGaWQlM0QxMDQxNzE5JTI2c3ViLXByb2R1Y3QtaWQlM0Q1MDg4MDE3JTIyJTdE",
                "desc":"让小龙虾爱好者一次过足瘾",
                "enjoy_url":"enjoyapp://product/detail?id=1041719&sub-product-id=5088017",
                "entity_name":"4位",
            
                "group":false,
                "id":"5088017",
                "original_price":"¥538",
                "price":"298",
                "tag":"徐汇其他",
                "title":"琥珀夏日小龙虾四人晚餐",
                "type":"product",
                "url":"https://image.ricebook.com/business/21043547323272",
                "url_type":"image"
            }
			axios.post('/api/getcitydata',pro)
						.then(function(res){
							console.log(res)
						})


			}
		}
	}


</script>
<style></style>



