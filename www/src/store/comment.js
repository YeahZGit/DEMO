import Api from '../factories'

const commentResource = Api.commentResource

const state = {
}

const mutations = {
}

const actions = {
  ADD_COMMENT: ({ commit, state }, comment) => {
    return commentResource.addComment(comment)
  },
  GET_COMMENTS_BY_DYNAMICS_ID: ({ commit, state }, { dynamicsId }) => {
    return commentResource.getCommentsByDynamicsId(dynamicsId)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
