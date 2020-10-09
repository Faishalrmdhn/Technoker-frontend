import axios from 'axios'

export default {
  state: {
    urlAPI: process.env.VUE_APP_URL,
    recruiter: []
  },
  mutations: {
    setRecruiterById(state, payload) {
      state.recruiter = payload.data.data[0]
    }
  },
  actions: {
    getRecruiterById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.urlAPI}recruiter/${payload}`)
          .then(response => {
            context.commit('setRecruiterById', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    patchRecruiter(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${context.state.urlAPI}recruiter/${payload.recruiter_id}`,
            payload.FormData
          )
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    recruiter(state) {
      return state.recruiter
    }
  }
}
