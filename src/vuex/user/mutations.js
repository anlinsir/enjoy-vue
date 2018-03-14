
import {ADD,SHOW,CHANGEAA,LOGIN} from './mutations-types'
export default {
		[ADD]:(state,a)=>{
			console.log(a)
			state.count+=1
		},
		[SHOW]:(state,li)=>{
			/*var*/ li  = li.filter( (li)=> {return li.vo})
			 
			state.list = [...li]
		},
		[CHANGEAA]:(state,val)=>{
			state.aa = val
		},
		[LOGIN]:(state,val)=>{
			state.user = val
		}
	}