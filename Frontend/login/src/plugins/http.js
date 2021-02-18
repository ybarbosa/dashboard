import Axios from 'axios'

const Http = (Vue) => {
  const headers = {
    'Content-Type': 'application/json'

  }

  const http = Axios.create({
    headers,
    baseURL: '0.0.0.0:9001'
  })

  Vue.prototype.$http = http
}

export default Http