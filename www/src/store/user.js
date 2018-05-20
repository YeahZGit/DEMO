import Api from '../factories'

const userResource = Api.userResource

const state = {
  userInfo: null
}

const mutations = {
  // REGISTER: (state, user) => {
  //   state.userInfo = user
  // },
  AUTHORIZE: (state, user) => {
    state.userInfo = user
    console.log(user)
    localStorage.setItem('userInfo', JSON.stringify(user))
  }
}

const actions = {
  REGISTER: ({ commit, state }, user) => {
    return userResource.register(user)
    // .then(res => {
    //   commit('REGISTER', res.body)
    // })
  },
  AUTHORIZE: ({ commit, state }, user) => {
    return userResource.authorize(user).then(res => {
      commit('AUTHORIZE', res.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
