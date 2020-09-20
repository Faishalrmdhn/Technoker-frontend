import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Experience from './modules/experience'
import Portofolio from './modules/portofolio'
import createPersistedState from 'vuex-persistedstate'
import worker from './Naldi/worker'
import recruiter from './modules/recruiter'
import message from './modules/message'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Experience,
    Portofolio,
    worker,
    recruiter,
    message
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user', 'recruiter.recruiter'],
      storage: window.sessionStorage
    })
  ]
})
