import Vue from 'vue'
import Router from 'vue-router'
const Bpp = r =>require.ensure([],() => r(require('@/pages/app.vue')),'bpp')
const BppIndex = r =>require.ensure([],() => r(require('@/components/app/appIndex.vue')),'bppIndex')
const BppFind = r =>require.ensure([],() => r(require('@/components/app/appFind.vue')),'bppFind')
const BppGood = r =>require.ensure([],() => r(require('@/components/app/appGood.vue')),'bppGood')
const BppMy = r =>require.ensure([],() => r(require('@/components/app/appMy.vue')),'bppMy')
/***************/
const Classify = r =>require.ensure([],() => r(require('@/pages/classify.vue')),'classify')
/***************/
const Login = r =>require.ensure([],() => r(require('@/pages/Login.vue')),'Login')








Vue.use(Router)

export default new Router({
  routes: [
  		{
  			path:"/index",
  			name:"bpp",
  			component:Bpp,
  			children:[
        {path:'/index/index',component:BppIndex}
        ,
        {path:'/index/find',component:BppFind}
        ,
        {path:'/index/good',component:BppGood},
        {path:'/index/my',component:BppMy}


        ],
  			redirect:'/index/index'
  		},
      {
        path:'/classify',
        name:"classify",
        component:Classify
      },
      {
        path:'/login',
        name:"login",
        component:Login
      },
        


  		{path:"/",redirect:"/index"}
      
      
    ]
})
