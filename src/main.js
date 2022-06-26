import Vue from 'vue'
import App from './App.vue'
//全局引入ElementUI
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

import './leafletExtend/popupPlus'
import "./leafletExtend/divIconPlus"
//引入leaflet
import L from 'leaflet'
//引入leaflet的css样式
import 'leaflet/dist/leaflet.css'
//引入leaflet默认的markerIcon
// import './Myleaflet/icon'
//把leaflet挂载到vue实例中，使得在vue中可以使用leaflet
Vue.prototype.L=L
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
