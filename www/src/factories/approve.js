import instance from './instance'

const approveResource = {
  addApprove (approve) {
    return instance.post('/approve', approve)
  }
}

export default approveResource
