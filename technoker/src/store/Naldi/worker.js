import axios from 'axios'
export default {
  state: {
    page: 1,
    limit: 3,
    allUsers: [],
    user: [],
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
      console.log(payload.data.data[0].portofolio)
      console.log(payload.data.data[0].experience)
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
            `http://127.0.0.1:4000/user?orderBy=${context.state.sort}&limit=${context.state.limit}&page=${context.state.page}`
          )
          .then(res => {
            context.commit('setAllUser', res)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    getUserById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://127.0.0.1:4000/user/${payload}`)
          .then(res => {
            console.log(res)
            context.commit('setUserById', res)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    searchUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://127.0.0.1:4000/user/search?name=${context.state.search}`)
          .then(res => {
            context.commit('setAllUser', res)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    postSkill(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://127.0.0.1:4000/skill', payload)
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    postPortfolio(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://127.0.0.1:4000/portofolio', payload)
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    postExperience(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://127.0.0.1:4000/experience', payload)
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    patchUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://127.0.0.1:4000/user/${payload.user_id}`,
            payload.FormData
          )
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response)
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
