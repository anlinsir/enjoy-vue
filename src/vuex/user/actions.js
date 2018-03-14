export let getAdd = ({commit})=>{
			//做异步
			setTimeout(function(){
				commit('SHOW',[{name:"A",vo:true},{name:"B",vo:false}])
			},1000)
		}
	