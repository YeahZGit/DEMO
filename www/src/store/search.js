import Api from '../factories'

const searchResource = Api.searchResource

const state = {
}

const mutations = {
}

const actions = {
  SEARCH: ({ commit, state }, { query }) => {
    return searchResource.search(query)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
