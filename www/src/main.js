import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import { VueMasonryPlugin } from 'vue-masonry'

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(VueMasonryPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
