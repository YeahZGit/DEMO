import instance from './instance'

const messageResource = {
  getMessagesByUserId (userId) {
    return instance.get('/approve/' + userId)
  }
}

export default messageResource
