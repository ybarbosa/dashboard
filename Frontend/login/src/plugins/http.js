import Axios from 'axios'

const Http = (Vue) => {
  const headers = {
    'Content-Type': 'application/json'

  }

  const http = Axios.create({
    headers,
    baseURL: '/api'
  })

  Vue.prototype.$http = http
}

export default Http