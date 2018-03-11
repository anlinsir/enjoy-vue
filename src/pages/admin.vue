<template>
	<div>
		admin

		<button @click="getcitydatas">indexdata</button>
            <br>
            <br>
            <br>
            <br>
        <button @click="getFindCarousel">getFindCarousel</button>




	</div>


</template>


<script>
import axios from 'axios'

export default{
	methods:{
		
		getcitydatas(){
			var pro ={
                "trace_meta":"JTdCJTIyX3VyaSUyMiUzQSUyMiUyRnYxJTJGd2ViJTJGd2Vla19jaG9pY2UuanNvbiUyMiUyQyUyMl9xdWVyeSUyMiUzQSUyMnBhZ2UlM0QwJTI2Y2l0eV9pZCUzRDIzNSUyMiUyQyUyMnByaWNlJTIyJTNBJTIyMjI4JTIyJTJDJTIyaWQlMjIlM0ElMjI1MDI5NzA0JTIyJTJDJTIydGl0bGUlMjIlM0ElMjIlRTYlOUMlQjQlRTclOTQlQjAlRTYlQjMlQjAlRTUlQkMlOEYlRTYlQjUlQjclRTklQjIlOUMlRTclODElQUIlRTklOTQlODUlRUYlQkMlODglRTYlQjMlOUIlRTYlODIlQTYlRTUlOUIlQkQlRTklOTklODUlRTUlQkElOTclRUYlQkMlODklRTUlOEYlOEMlRTQlQkElQkElRTklQTQlOTAlMjIlMkMlMjJ0eXBlJTIyJTNBJTIycHJvZHVjdCUyMiUyQyUyMmVuam95VXJsJTIyJTNBJTIyZW5qb3lhcHAlM0ElMkYlMkZwcm9kdWN0JTJGZGV0YWlsJTNGaWQlM0QxMDE1NTg1JTI2c3ViLXByb2R1Y3QtaWQlM0Q1MDI5NzA0JTIyJTdE",
                "desc":"汤底奶香浓郁 海鲜新鲜到店",
                "enjoy_url":"enjoyapp://product/detail?id=1015585&sub-product-id=5029704",
                "entity_name":"2位",
                "ext":{
                    "product_type":0
                },
                "group":false,
                "id":"5029704",
                "original_price":"¥268",
                "price":"228",
                "tag":"科华北路",
                "title":"朴田泰式海鲜火锅（泛悦国际店）双人餐",
                "type":"product",
                "url":"https://image.ricebook.com/business/17723378223902",
                "url_type":"image",
                "header":{
            "trace_meta":"JTdCJTIyX3VyaSUyMiUzQSUyMiUyRnYxJTJGd2ViJTJGd2Vla19jaG9pY2UuanNvbiUyMiUyQyUyMl9xdWVyeSUyMiUzQSUyMnBhZ2UlM0QwJTI2Y2l0eV9pZCUzRDIzNSUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyJUU2JUFGJThGJUU1JTkxJUE4JUU3JUIyJUJFJUU5JTgwJTg5JUU5JUE0JTkwJUU5JUE1JUFFJTIyJTdE",
            "desc":"8月14日更新",
            "title":"每周精选餐饮"
        }
            }

			axios.post('/api/getcitydata',pro)
						.then(function(res){
							console.log(res)
						})


			},
            getFindCarousel(){

                var pro = {
                    img:'https://image.ricebook.com/business/23175261623972?imageView2/2/w/670' ,
                    text1:"超级星期五",
                    text2:'满450减45元 满180减15元！春天里，约会你',
                    text3:'一览蓉城春景的星级酒店、浪漫满分的精致西餐厅......白色情人节特辑'
                }
                axios.post('/api/getfindcarousel',pro)
                        .then(function(res){
                            console.log(res)
                        })
            }





		}
	}


</script>
<style></style>



