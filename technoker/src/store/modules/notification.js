import axios from 'axios'

export default {
  state: {
    notifList: [],
    notifCount: 0
  },
  mutations: {
    setNotifList(state, payload) {
      state.notifList = payload
    },
    setNotifCount(state, payload) {
      state.notifCount = payload
    }
  },
  actions: {
    getNotificationByUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://127.0.0.1:4000/notification/${payload.role}/${payload.user_id}`)
          .then(response => {
            context.commit('setNotifList', response.data.data)
            console.log(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getCountNotif(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://127.0.0.1:4000/notification/unread/${payload.role}/${payload.user_id}`)
          .then(response => {
            console.log(response)
            context.commit('setNotifCount', parseInt(response.data.data[0].total))
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    getNotifList(state) {
      return state.notifList
    },
    getNotifCount(state) {
      return state.notifCount
    }
  }
}
