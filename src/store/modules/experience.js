import axios from 'axios'

export default {
  state: {},
  computations: {},
  actions: {
    deleteExperience(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}experience/${payload}`)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {}
}
