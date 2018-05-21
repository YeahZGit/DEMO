import instance from './instance'

const uploadResource = {
  uploadImg (file) {
    return instance.post('/uploads/pictures', file)
  }
}

export default uploadResource
