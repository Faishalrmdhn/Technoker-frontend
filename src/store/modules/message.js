import axios from 'axios'

export default {
  state: {
    urlAPI: process.env.VUE_APP_URL,
    recruiter: [],
    dataRoom: [],
    messages: []
  },
  mutations: {
    getRoomData(state, payload) {
      state.dataRoom = payload
    },
    getMessages(state, payload) {
      state.messages = payload[0].messages
    }
  },
  actions: {
    postMessage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlAPI}chat`, payload)
          .then(response => resolve(response.data))
          .catch(error => reject(error))
      })
    },
    getRoomById(context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.state.urlAPI}chat/${payload}`).then(res => {
          context.commit('getMessages', res.data.data)
        })
      })
    },
    getWorkerRoom(context, payload) {
      axios
        .get(`${context.state.urlAPI}chat/user/${payload}`)
        .then(response => {
          context.commit('getRoomData', response.data.data)
          // context.commit('set')
        })
        .catch(error => {
          console.log(error)
        })
    },
    getRecruiterRoom(context, payload) {
      axios
        .get(`${context.state.urlAPI}chat/recruiter/${payload}`)
        .then(response => {
          context.commit('getRoomData', response.data.data)
          // context.commit('set')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  getters: {
    dataRoom(state) {
      return state.dataRoom
    },
    messages(state) {
      return state.messages
    }
  }
}
