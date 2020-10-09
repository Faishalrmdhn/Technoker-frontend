import axios from 'axios'
import router from '../../router/index'
export default {
  state: {
    urlAPI: process.env.VUE_APP_URL,
    user: {},
    recruiter: {},
    token: localStorage.getItem('token') || null,
    user_id: null,
    recruiter_id: null,
    portfolio: [],
    experience: [],
    role: ''
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
      state.user_id = payload.user_id
      state.role = payload.role
    },
    delUser(state) {
      state.user = {}
      state.token = null
    },
    setRecruiter(state, payload) {
      state.recruiter = payload
      state.token = payload.token
      state.recruiter_id = payload.recruiter_id
    }
  },
  actions: {
    loginUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlAPI}user/login`, payload)
          .then(response => {
            // console.log(response)
            context.commit('setUser', response.data.data)
            localStorage.setItem('token', response.data.data.token)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    loginRecruiter(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlAPI}recruiter/login`, payload)
          .then(response => {
            // console.log(response)
            context.commit('setUser', response.data.data)
            localStorage.setItem('token', response.data.data.token)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    registerUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlAPI}user/register`, payload)
          .then(response => {
            // console.log(response.data)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    registerRecruiter(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlAPI}recruiter/register`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    interceptorRequest(context) {
      console.log('interceptor works!')
      axios.interceptors.request.use(
        function (config) {
          config.headers.authorization = `Bearer ${context.state.token}`
          // Do something before request is sent
          return config
        },
        function (error) {
          return Promise.reject(error)
        }
      )
    },
    logout(context) {
      localStorage.removeItem('token')
      context.commit('delUser')
      router.push('/login')
    },
    interceptorResponse(context) {
      axios.interceptors.response.use(
        function (response) {
          return response
        },
        function (error) {
          if (error.response.status === 403) {
            if (
              error.response.data.msg === 'invalid token' ||
              error.response.data.msg === 'invalid signature!'
            ) {
              localStorage.removeItem('token')
              context.commit('delUser')
              router.push('/login')
              alert('Sorry your token is invalid! cannot pass this section!')
            } else if (error.response.data.msg === 'jwt expired') {
              localStorage.removeItem('token')
              context.commit('delUser')
              router.push('/login')
              alert('Sorry your token is invalid! cannot pass this section!')
            }
          }
          return Promise.reject(error)
        }
      )
    },
    forgotPasswordUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlAPI}user/forgot-password`, payload)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    forgotPasswordRecruiter(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlAPI}recruiter/forgot-password`, payload)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    updatePasswordUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${context.state.urlAPI}user/update-password`, payload)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
            console.log('error di auth')
          })
      })
    },
    updatePasswordRecruiter(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${context.state.urlAPI}recruiter/update-password`, payload)
          .then(response => {
            console.log(payload)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
            console.log('error di auth')
          })
      })
    }
  },
  getters: {
    isLogin(state) {
      return state.token !== null
    },
    getUser(state) {
      return state.user
    },
    getUserId(state) {
      return state.user_id
    },
    gerRecruiterId(state) {
      return state.recruiter_id
    },
    getPortfolio(state) {
      return state.portfolio
    },
    getExperience(state) {
      return state.experience
    },
    getRole(state) {
      return state.role
    }
  }
}
