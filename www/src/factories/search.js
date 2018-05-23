import instance from './instance'

const searchResource = {
  search (query) {
    return instance.get('/search/' + query)
  }
}

export default searchResource
