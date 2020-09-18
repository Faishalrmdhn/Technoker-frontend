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
    search: ''
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
      console.log('DDDDDDDDDDD')
      state.user = payload.data.data[0]
    }
  },
  actions: {
    getAllUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://127.0.0.1:4000/user?limit=${context.state.limit}&page=${context.state.page}`
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
    }
  }
}
