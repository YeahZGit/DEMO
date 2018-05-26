import instance from './instance'

const userResource = {
  register (user) {
    return instance.post('/users', user)
  },
  authorize (user) {
    return instance.post('/users/authorize', user)
  },
  updateUserById (id, user) {
    return instance.put('/users/' + id, user)
  },
  getAllFansByUserId (id) {
    return instance.get('/users/' + id + '/fans')
  },
  removeFans (userId, fansId) {
    return instance.delete('/users/' + userId + '/fans/' + fansId)
  },
  getAllFollowsByUserId (id) {
    return instance.get('/users/' + id + '/follows')
  },
  addFollow (userId, followId) {
    return instance.put('/users/' + userId + '/add-follow/' + followId)
  },
  removeFollow (userId, followId) {
    return instance.put('/users/' + userId + '/remove-follow/' + followId)
  }
}

export default userResource
