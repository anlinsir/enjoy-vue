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
/************************************/
const Search = r =>require.ensure([],() => r(require('@/pages/search.vue')),'search')
/*****************/
const Details = r =>require.ensure([],() => r(require('@/pages/details.vue')),'details')

/*admin*/
const Admin = r =>require.ensure([],() => r(require('@/pages/admin.vue')),'admin')









Vue.use(Router)

export default new Router({
  mode:"history"
  ,
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
      {
        path:'/admin',
        name:"admin",
        component:Admin
      },
        {path:'/my/:user',component:BppMy}
      ,
      {
        path:'/search',
        name:"search",
        component:Search
      },
      {
        path:'/details/:Id',
        name:"details",
        component:Details
      }, {path:'/good',component:BppGood},

        


  		{path:"/",redirect:"/index"}
      
      
    ]
})
