import axios from 'axios'
import router from '../../router/index'
export default {
  state: {},
  mutation: {},
  actions: {
    patchDataUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`http://127.0.0.1:4000/user/${payload}`, payload)
          .then(response => {
            console.log(payload)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
            console.log('error di auth')
          })
      })
    }
  },
  getters: {}
}
