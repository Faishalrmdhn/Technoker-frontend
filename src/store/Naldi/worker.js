import axios from 'axios'
export default {
  state: {
    urlAPI: process.env.VUE_APP_URL,
    page: 1,
    limit: 3,
    allUsers: [],
    user: {},
    pagination: {},
    totalData: 0,
    skills: [],
    search: '',
    sort: null,
    portfolio: [],
    experience: []
  },
  mutations: {
    setAllUser(state, payload) {
      state.allUsers = payload.data.data
      state.pagination = payload.data.pagination
      state.totalData = payload.data.pagination.totalData
      state.skills = payload.data.data.skills
    },
    setPagination(state, payload) {
      state.page = payload
    },
    setSearch(state, payload) {
      state.search = payload
    },
    setUserById(state, payload) {
      state.user = payload.data.data[0]
      state.portfolio = payload.data.data[0].portofolio

      state.experience = payload.data.data[0].experience
      state.skills = payload.data.data[0].skills
    },
    setSort(state, payload) {
      state.sort = payload
    }
  },
  actions: {
    getAllUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${context.state.urlAPI}user?orderBy=${context.state.sort}&limit=${context.state.limit}&page=${context.state.page}`
          )
          .then(res => {
            context.commit('setAllUser', res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getUserById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.urlAPI}user/${payload}`)
          .then(res => {
            context.commit('setUserById', res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    searchUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${context.state.urlAPI}user/search?name=${context.state.search}`
          )
          .then(res => {
            context.commit('setAllUser', res)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    postSkill(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlAPI}skill`, payload)
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    postPortfolio(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlAPI}portofolio`, payload)
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    postExperience(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlAPI}experience`, payload)
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    patchUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${context.state.urlAPI}user/${payload.user_id}`,
            payload.FormData
          )
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    }
  },
  getters: {
    allUsers(state) {
      return state.allUsers
    },
    totalData(state) {
      return state.totalData
    },
    user(state) {
      return state.user // DATA USER BY ID
    },
    portfolio(state) {
      return state.portfolio
    },
    experience(state) {
      return state.experience
    }
  }
}
