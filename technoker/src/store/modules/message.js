import axios from 'axios'

export default {
  state: {
    recruiter: []
  },
  mutations: {},
  actions: {
    postMessage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://127.0.0.1:4000/chat', payload)
          .then(response => resolve(response.data))
          .catch(error => reject(error))
      })
    },
    getWorkerRoom(context, payload) {
      axios
        .get(`http://127.0.0.1:4000/chat/user/${payload}`)
        .then(response => {
          console.log(response)
          // context.commit('set')
        })
        .catch(error => {
          console.log(error)
        })
    },
    getRecruiterRoom(context, payload) {
      axios
        .get(`http://127.0.0.1:4000/chat/recruiter/${payload}`)
        .then(response => {
          context.commit('setWorkerRoom')
          // context.commit('set')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  getters: {}
}
