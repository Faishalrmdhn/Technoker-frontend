import axios from 'axios'
import router from '../../router/index'
export default {
  state: {
    user: {},
    token: localStorage.getItem('token') || null,
    user_id: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
      state.user_id = payload.user_id
    },
    delUser(state) {
      state.user = {}
      state.token = null
    }
  },
  actions: {
    loginUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://127.0.0.1:4000/user/login', payload)
          .then(response => {
            console.log(response)
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
          .post('http://127.0.0.1:4000/recruiter/login', payload)
          .then(response => {
            console.log(response)
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
          .post('http://127.0.0.1:4000/user/register', payload)
          .then(response => {
            console.log(response.data)
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
          .post('http://127.0.0.1:4000/recruiter/register', payload)
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
        function(config) {
          config.headers.authorization = `Bearer ${context.state.token}`
          // Do something before request is sent
          return config
        },
        function(error) {
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
        function(response) {
          return response
        },
        function(error) {
          console.log(error.response)
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
    forgotPassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://127.0.0.1:4000/user/forgot', payload)
          .then(response => {
            console.log(response)
            console.log('FORGOT')
            // context.commit('setUser', response.data.data)
            // localStorage.setItem('token', response.data.data.token)
            // resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
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
    }
  }
}
