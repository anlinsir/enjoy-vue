<template>

	<div class="appIndex">
		<div class="container">
			<img src="https://image.ricebook.com/business/18870146923449?imageView2/2/w/750/h/246">
			<div class="desc">
		    邀请好友加入ENJOY，给TA发放价值50元礼券。好友完成首单消费后，你亦可获得价值50元礼券。
		  </div>
		  <button class="invite-btn">
				即刻邀请
			</button>
			<div class="result">
		    已成功邀请<span>0</span>位好友 | 获得<span>0</span>元礼券
		  </div>
				<ul class="invite-rules clearfix">
				<li>  5人 <span>额外奖励<em>100元</em></span></li><li>
	      10人 <span>额外奖励<em>100元</em></span></li><li>
	      25人 <span>额外奖励<em>750元</em></span></li><li>
	      50人 <span>额外奖励<em>2000元</em></span></li></ul>
	      <div class="rewards"><div class="title">
      奖励明细
    </div> <ul></ul></div>


		</div>	
	<footer>
			<ul>
				<li v-for='(val,key,index) in indexRouter'>
					<router-link :to="key"><i :class="val"></i></router-link>
				</li>
				<li><router-link :to="'/good'"><i class="el-icon-goods"></i></router-link></li>

				<li><router-link :to="user?`/my/${user}`:'/login'"><i class="el-icon-news"></i></router-link></li>
				

			</ul>

		</footer>	
	</div>
	

</template>


<script>
export default {
	data(){
		return({
			indexRouter:{
				'index':'el-icon-news',
				'/index/find':'el-icon-view',
								

			},
			
			user:localStorage.user		})
	}
}

</script>

<style lang="scss" scoped>
	.appIndex{		
		width: 100%;
		height: 90%;
		flex: 1;
		/* height: 50vw; */
		 display: flex;
	  	flex-direction: column;

		>.container{
	
			width: 100%;
			height: 100%;
			>img{
			width: 100%;
			height: 32.8vw;
			}
			>.desc{
			    width: 89vw;
			    margin: 8vw 5.33vw;
			    font-size: 3.73vw;
			    line-height: 1.29;
			    color: #63666b;
			}
			>.invite-btn{
				    margin: 0 auto;
				    display: block;
				    padding: 2.66vw 8vw;
				    border-radius: 1.06vw;
				    background-color: #ff3939;
				    font-size: 4vw;
				    text-align: center;
				    color: #fff;
				    border: none;
			}
			>.result{
				    margin: 10.66vw auto 5.33vw;
				    color: #2c3038;
				    font-size: 3.73vw;
				    text-align: center;
				    >span{
				    	color: #ff3939;
				    }

			}
			>.invite-rules{
			 margin: 0 5.33vw;
		    color: #92969c;
		    font-size: 3.2vw;
			    >li{
			    	    width: 100%;
	    				margin-top: 2vw;
	    				text-align: left;
	    				>span{
	    					display: inline-block;
    						float: right;
	    				}
			    }
			}
			>.rewards{
				border-top: .1vw solid #e0e0e0;
			    position: relative;
			    margin: 8vw 5.33vw;
			    display: block;
			    >.title{
			    	    width: 22vw;
					    text-align: center;
					    font-size: 3.46vw;
					    color: #92969c;
					    position: absolute;
					    top: -2.53vw;
					    left: 50%;
					    margin-left: -11.2vw;
					    background-color: #fff;
			    }
			}
		}
		footer{
		flex: 1;

		}
	
	}
	.test{
		p{
			color: red;
		}
	}



</style>

