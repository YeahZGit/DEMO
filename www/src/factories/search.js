import instance from './instance'

const searchResource = {
  search (query) {
    return instance.post('/search', query)
  }
}

export default searchResource
