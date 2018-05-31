import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import '../node_modules/masonry-layout/dist/masonry.pkgd.min.js'
import '../node_modules/imagesloaded/imagesloaded.pkgd.min.js'

Vue.config.productionTip = false
Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
