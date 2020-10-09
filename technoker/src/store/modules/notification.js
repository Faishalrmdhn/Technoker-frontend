import axios from 'axios'

export default {
  state: {
    urlAPI: process.env.VUE_APP_URL,
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
          .get(`${context.state.urlAPI}notification/${payload.role}/${payload.user_id}`)
          .then(response => {
            context.commit('setNotifList', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getCountNotif(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.urlAPI}notification/unread/${payload.role}/${payload.user_id}`)
          .then(response => {
            context.commit('setNotifCount', parseInt(response.data.data[0].total))
            resolve(response)
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
