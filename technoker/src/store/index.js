import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Experience from './modules/experience'
import Portofolio from './modules/portofolio'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Experience,
    Portofolio
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user'],
      storage: window.sessionStorage
    })
  ]
})
