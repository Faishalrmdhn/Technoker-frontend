import axios from 'axios'

export default {
  state: {
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
          .get(`http://127.0.0.1:4000/recruiter/${payload}`)
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
            `http://127.0.0.1:4000/recruiter/${payload.recruiter_id}`,
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
