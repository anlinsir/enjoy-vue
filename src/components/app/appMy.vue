<template>
	<div>
	<div class="appIndex">
		<div class="myContainer">
			<div class="myImg">
				<div class="imgwarp">
				<img src="/static/userheadimg.png">
				<transition name="fade">
				<p v-if="userShow">{{user}}</p>
				</transition>
				</div>
			</div>
			<div class="comsumptionCode">code 消费码
				<i class="icon iconfont icon-xiangxiajiantou"></i>
			</div>
			<div class="myGiftwarp">
				<div class="myGiftCertificate">我的礼券
				<i class="icon iconfont icon-xiangxiajiantou"></i>
				</div>
				<div class="address">地址管理
				<i class="icon iconfont icon-xiangxiajiantou"></i>
					
				</div>

				

			</div>
		</div>
		

		
	</div>
	<button @click="getindex" class="footer">
			dsdsdsds
		</button>
	</div>
</template>


<script>
export default {
	data(){
		return({
			user:"",
			userShow:false
		})
	},
	created(){
		this.user = this.$route.params.user
	},
	mounted(){
		setTimeout(()=>{

			this.userShow = true
		},1000)
	},
	methods:{
		getindex(){
			this.$router.push({path:`/index/index${name}`, query:{ id:Math.ceil(Math.random()*100),name:"dsdsds",time:"dwn",user:this.user }})
		}
	}

}

</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.footer{
	position: absolute;
	bottom: 0;
	display: block;
	width: 100%;
}
	.myContainer{
		width: 100%;
		height: 100%;
		>.myImg{
			width: 100%;
			height: 50vw;
			background-color: #CCFC62;
			color: white;
			position: relative;
			animation: bgchange 20s linear;
			animation-iteration-count:infinite; 
			margin-bottom:5vw;
			>.imgwarp{
				width: 100%;
				height: 100%;
				text-align: center;
				>img{
				width: 18.66vw;
				height: 18.66vw;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				border-radius: 50%;
				margin: auto;
				animation: xia .4s ease;
			}
			>p{
				position: absolute;
				top: 36vw;
				left: 0;
				bottom: 0;
				right: 0;
				font-size: 4vw;
				margin: auto;
				color: black;
			}
			}
			
		}
		>.comsumptionCode{
			border-bottom: 1px solid #eee;
			border-top: 1px solid #eee;

			height: 15vw;
			font-weight: 600;
			margin-bottom:10vw; 
			padding-left:10vw;
			font-size: 4vw;
			line-height: 15vw;
			text-align: left;
			box-sizing: border-box;
			padding-right: 5vw;	
			>i{
				float: right;
			font-size: 4vw;

			}

		}
		>.myGiftwarp{
			height: 30vw;
			border-top: 1px solid #eee;
			border-bottom: 1px solid #eee;

			padding-left: 10vw;
			>.myGiftCertificate{
				border-bottom: 1px solid #eee;
				height: 15vw;
				padding-right: 5vw;
			font-size: 4vw;

				text-align: left;
			line-height: 15vw;

				>i{
					float: right;
			font-size: 4vw;

				}
			}
			>.address{
				height: 15vw;
				text-align: left;
			font-size: 4vw;

			line-height: 15vw;
				
				padding-right: 5vw;
				>i{
			font-size: 4vw;

					float: right;
				}

			}
		}
		
	}
	

@keyframes bgchange
{
	0%{
		background-color: #EDEDED;
	}
   20%{
   	background-color: #EDE387;
   }
   40%{
   	background-color: #CCFC62;
   }
   60%{
   	background-color: #3B200C;
   }
   80%{
   	background-color: #DE8100;
   }
   100%{
   	background-color: #EDEDED;
   }
}

@keyframes xia{
	0%{
		top: -75vw;
	}
	10%{
		top: -60vw;
	}
	20%{
		top: -50vw;
	}
	30%{
		top: -40vw;
	}
	40%{
		top: -30vw;
	}
	50%{
		top: -20vw;
	}
	60%{
		top: -10vw;
	}
	70%{
		top: 0vw;
	}
	75%{
		top: -5vw;
	}
	80%{
		top: -10vw;
	}
	90%{
		top: -5vw;
	}
	100%{
		top: 0;
	}
}


</style>

