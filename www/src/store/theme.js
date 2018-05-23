import Api from '../factories'

const themeResource = Api.themeResource

const state = {
}

const mutations = {
}

const actions = {
  GET_THEME_BY_LEVEL: ({ commit, state }, { level }) => {
    return themeResource.getThemeByLevel(level)
    // .then(res => {
    //   commit('GET_THEME_BY_LEVEL')
    // })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
