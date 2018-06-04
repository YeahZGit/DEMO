import Api from '../factories'

const userResource = Api.userResource

const state = {
  userInfo: null,
  allFollows: [],
  allFans: []
}

const mutations = {
  // REGISTER: (state, user) => {
  //   state.userInfo = user
  // },
  AUTHORIZE: (state, user) => {
    state.userInfo = user
    localStorage.setItem('userInfo', JSON.stringify(user))
  },
  UPDATE_USER_BY_ID: (state, user) => {
    state.userInfo = user
    localStorage.setItem('userInfo', JSON.stringify(user))
  },
  GET_ALL_FOLLOWS_BY_USER_ID: (state, follows) => {
    state.allFollows = follows
  },
  GET_ALL_FANS_BY_USER_ID: (state, fans) => {
    state.allFans = fans
  }
}

const actions = {
  REGISTER: ({ commit, state }, user) => {
    return userResource.register(user).then((res) => {
      return res
    })
  },
  AUTHORIZE: ({ commit, state }, user) => {
    return userResource.authorize(user).then(res => {
      if (res.status === 200 && res.data) {
        commit('AUTHORIZE', res.data)
        return res
      }
    })
  },
  UPDATE_USER_BY_ID: ({ commit, state }, user) => {
    return userResource.updateUserById(user._id, user).then(res => {
      if (res.status === 200 && res.data) {
        commit('UPDATE_USER_BY_ID', res.data)
        return res
      }
    })
  },
  GET_ALL_FOLLOWS_BY_USER_ID: ({ commit, state }, { userId }) => {
    return userResource.getAllFollowsByUserId(userId).then(res => {
      if (res.status === 200 && res.data) {
        commit('GET_ALL_FOLLOWS_BY_USER_ID', res.data)
      }
    })
  },
  GET_ALL_FANS_BY_USER_ID: ({ commit, state }, { userId }) => {
    return userResource.getAllFansByUserId(userId).then(res => {
      if (res.status === 200 && res.data) {
        commit('GET_ALL_FANS_BY_USER_ID', res.data)
      }
    })
  },
  ADD_FOLLOW: ({ commit, state }, { userId, followId }) => {
    return userResource.addFollow(userId, followId).then(res => {
      if (res.status === 200 && res.data) {
        commit('GET_ALL_FOLLOWS_BY_USER_ID', res.data)
      }
    })
  },
  REMOVE_FOLLOW: ({ commit, state }, { userId, followId }) => {
    return userResource.removeFollow(userId, followId).then(res => {
      if (res.status === 200 && res.data) {
        commit('GET_ALL_FOLLOWS_BY_USER_ID', res.data)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
