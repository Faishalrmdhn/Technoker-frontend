import axios from 'axios'

export default {
  state: {
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
      console.log(state.messages)
    }
  },
  actions: {
    postMessage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://127.0.0.1:4000/chat', payload)
          .then(response => resolve(response.data))
          .catch(error => reject(error))
      })
    },
    getRoomById(context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`http://127.0.0.1:4000/chat/${payload}`).then(res => {
          context.commit('getMessages', res.data.data)
        })
      })
    },
    getWorkerRoom(context, payload) {
      axios
        .get(`http://127.0.0.1:4000/chat/user/${payload}`)
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
        .get(`http://127.0.0.1:4000/chat/recruiter/${payload}`)
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
