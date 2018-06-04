import instance from './instance'

const messageResource = {
  getMessagesByUserId (userId) {
    return instance.get('/messages/' + userId)
  }
}

export default messageResource
