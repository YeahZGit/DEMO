import instance from './instance'

const commentResource = {
  addComment (comment) {
    return instance.post('/comments', comment)
  },
  getCommentsByDynamicsId (dynamicsId) {
    return instance.get('/comments/' + dynamicsId)
  }
}

export default commentResource
