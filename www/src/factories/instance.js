import axios from 'axios'
import configs from '../constants/configs'

const instance = axios.create({
  baseURL: configs.API_BASE,
  timeout: 10000
})

instance.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default instance
