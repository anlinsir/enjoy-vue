// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import  'element-ui/lib/theme-chalk/index.css'
import store from './vuex'
import Carousel3d from 'vue-carousel-3d';
import '@/base/cssBase.css'
import '@/fontvue/iconfont.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(ElementUI);
Vue.use(Carousel3d);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
//dslkdniscnoi
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, },
  template: '<App/>',
  ElementUI,
  store,
  

})
