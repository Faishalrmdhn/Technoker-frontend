import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import createPersistedState from 'vuex-persistedstate'
import worker from './Naldi/worker'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    worker
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user', 'worker.user'],
      storage: window.sessionStorage
    })
  ]
})
