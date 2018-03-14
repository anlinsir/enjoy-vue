import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'



var state = {
		user:'',	
		msg:"this is data in store",
		arr:[1,5,6,2,3,8,7],
		count:1,
		list:[],
		aa:'today'
	}
export default {
	mutations,
	actions,
	getters,
	state
}

