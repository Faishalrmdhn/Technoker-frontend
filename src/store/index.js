import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Experience from './modules/experience'
import Portofolio from './modules/portofolio'
import createPersistedState from 'vuex-persistedstate'
import worker from './Naldi/worker'
import recruiter from './modules/recruiter'
import message from './modules/message'
import notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Experience,
    Portofolio,
    worker,
    recruiter,
    message,
    notification
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: [
        'Auth.user',
        'worker.user',
        'worker.portfolio',
        'worker.experience',
        'worker.skill',
        'recruiter.recruiter'
      ],
      storage: window.sessionStorage
    })
  ]
})
