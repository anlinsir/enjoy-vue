<template>
	<div class="loginContainer">
		<transition name="down">
		<div v-show="alertShow" class="alert">{{alert}}</div>
		</transition>
		<div class="login">
			<h1><a href="#"><img src="/static/loginLogo.png"></a></h1>
			<div class="loginInput">
				<input @input="phoneChange" v-model="phone" class="phone" type="text" placeholder="手机号">

				<div class="bothInput">
				<input @input="phoneChange" v-model="code" class="code" type="text" placeholder="短信验证码"> 

				<button @click="changecodebtn" v-if="codebtn" class="codeBtn">获取验证码</button>
				<button v-else class="codeBtns" disabled>{{changecodebtntime}}后重试</button>

				</div>

				<button @click="login" class="loginBtn">登录</button>
				
			</div>

		</div>

		
	</div>

</template>



<script>
export default{
	data(){
		return({
			phone:"",
			code:"",
			alert:"err",
			alertShow:false,
			codebtn:true,
			changecodebtntime:null,
			codetime:20
		})
	},
	methods:{
		phoneChange(){},
		login(){
			/*判断没有输入时**********************************************************************/
			if(!this.phone && !this.code){
				this.alert = '请输入手机号和验证码'
				this.alertShow = true
				setTimeout(()=>{
				this.alertShow = false
				},1000)
				return
			}else if(!this.phone){
				this.alert = '请输入手机号'
				this.alertShow = true
				setTimeout(()=>{
				this.alertShow = false
				},1000)
				return
			}else if(!this.code){
				this.alert = '请输入验证码'
				this.alertShow = true
				setTimeout(()=>{
				this.alertShow = false
				},1000)
				return

			}
			/*/格式有误时***********************************/
			if(!/[0-9]{11}$/.test(this.phone)){
				this.alert = '手机号格式有误'
				this.alertShow = true
				setTimeout(()=>{
				this.alertShow = false
				},1000)
				return
			}else{
				console.log('t')				
			}	
			/*成功时*****/
			this.$router.replace( {path:`/index/index${name}`, query:{ id:Math.ceil(Math.random()*100),name:"dsdsds",time:"dwn",user:this.code }})

		},
		changecodebtn(){
			if(!this.phone || !/[0-9]{11}$/.test(this.phone)){
				this.alert = '手机号未填写或格式有误'
				this.alertShow = true
				setTimeout(()=>{
				this.alertShow = false
				},1000)
				return
			}
			this.changecodebtntime = this.codetime
			this.codebtn = false
			setTimeout(()=>{
				this.codebtn = true
			},this.changecodebtntime*1000)
			var timer = setInterval(()=>{				
				console.log(this.changecodebtntime)
				this.changecodebtntime = this.changecodebtntime - 1
				if(this.changecodebtntime == 0){
					clearInterval(timer)
					this.changecodebtntime = this.codetime
				}
			},1000)
		}
	}

}
</script>





<style lang="scss" scoped>
	
	.loginContainer{
		width: 100%;
		height: 100%;
		.alert{
			position: absolute;
			top: 0vw;
			left: 0;
			right: 0;
			margin: auto;			
			width: 80%;
			height: 11.3vw;
			background-color: #fef0f0;
			color: #f56c6c;
			border-radius: 5vw;
			line-height: 11.73vw; 
			font-size: 4vw;
		}
		/*alert 动画效果*/
		.down-enter-active {
		  animation: down-in 2s;
		}
		.down-leave-active {
		  animation: down-in 2s reverse;
		}
		@keyframes down-in {
		  0% {
		  	top: -11.7vw;
		  }
		  20% {
		    top: 5vw;
		  }
		  80%{
		    top: 5vw;

		  }
		  100% {
		  	top: -11.7vw;
		   
		  }
		}


		.login{
			overflow : hidden;
			h1{
				margin: 0 auto;
				margin-top:13.33vw;
				margin-bottom: 13.33vw;				
				 width: 40vw;
				 height: 12vw;
				img{
					width: 100%;
					height: 100%;
				}
				
			}
			.loginInput{
				padding: 0 8vw;
				box-sizing: border-box;
				width: 100%;
				height: 100%;
				input{
					width: 100%;
					height:11.6vw;
					margin-bottom: 6vw;  
					border-radius: 8px;
   					border: 1px solid #bdc0c5;
   					outline: none;
   					padding: 0 5vw;
   					box-sizing: border-box;
   					font-size: 4vw;
				}
				.bothInput{
					display: flex;
					justify-content: space-between;
					>input{
						width: 60%;
					}
					>button{
						width: 35%;
						height:11.6vw;
						border: 1px solid;
						background-color: #fff;
   						font-size: 4vw;
   						outline: none;

					}
				}
				>button{
					width: 100%;
					height: 11.3vw;
					border:none;
					background-color: #1a1a1a;
					color: #e5e5e5;
					outline: none;
   					font-size: 4vw;

				}
			}
		}
	}

</style>