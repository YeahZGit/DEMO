import Api from '../factories'

const messageResource = Api.messageResource

const state = {
}

const mutations = {
}

const actions = {
  GET_MESSAGES_BY_USER_ID: ({ commit, state }, { userId }) => {
    return messageResource.getMessagesByUserId(userId)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
