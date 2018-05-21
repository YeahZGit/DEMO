import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import upload from './upload'
import dynamics from './dynamics'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    upload,
    dynamics
  }
})

export default store
