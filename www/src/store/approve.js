import Api from '../factories'

const approveResource = Api.approveResource

const state = {
}

const mutations = {
}

const actions = {
  ADD_APPROVE: ({ commit, state }, approve) => {
    return approveResource.addApprove(approve)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
