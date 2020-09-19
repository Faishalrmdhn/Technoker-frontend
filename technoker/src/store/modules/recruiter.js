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
      axios
        .get(`http://127.0.0.1:4000/recruiter/${payload}`)
        .then(response => {
          context.commit('setRecruiterById', response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    patchRecruiter(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`http://127.0.0.1:4000/recruiter/${payload}`, payload)
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
