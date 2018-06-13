import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import { VueMasonryPlugin } from 'vue-masonry'
import filters from './utils/filters'

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(VueMasonryPlugin)
Vue.filter('dateFilter', filters.dateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
