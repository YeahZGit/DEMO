import Api from '../factories'

const dynamicsResource = Api.dynamicsResource

const state = {
  selfDynamics: [],
  dynamics: []
}

const mutations = {
  GET_SELF_DYNAMICS_BY_USER_ID: (state, dynamics) => {
    state.selfDynamics = dynamics
  },
  GET_DYNAMICS_BY_USER_ID: (state, dynamics) => {
    state.dynamics = dynamics
  }
}

const actions = {
  ADD_DYNAMICS: ({ commit, state }, dynamics) => {
    return dynamicsResource.addDynamics(dynamics)
  },
  GET_SELF_DYNAMICS_BY_USER_ID: ({ commit, state }, { userId }) => {
    return dynamicsResource.getSelfDynamicsByUserId(userId).then(res => {
      if (res.status === 200 && res.data) {
        commit('GET_SELF_DYNAMICS_BY_USER_ID', res.data)
      }
    })
  },
  GET_DYNAMICS_BY_USER_ID: ({ commit, state }, { userId }) => {
    return dynamicsResource.getDynamicsByUserId(userId).then(res => {
      if (res.status === 200 && res.data) {
        commit('GET_DYNAMICS_BY_USER_ID', res.data)
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
