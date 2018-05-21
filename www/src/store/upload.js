import Api from '../factories'

const uploadResource = Api.uploadResource

const state = {
}

const mutations = {
}

const actions = {
  UPLOAD_IMG: ({ commit, state }, file) => {
    return uploadResource.uploadImg(file)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
