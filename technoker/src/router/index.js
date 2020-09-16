import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'
import LoginC from '../views/auth/Login-Candidate.vue'
import LoginR from '../views/auth/Login-Recruiter.vue'
import RegisterC from '../views/auth/Register-Candidate.vue'
import RegisterR from '../views/auth/Register-Recruiter.vue'
import ResetPass from '../views/auth/Reset-Password.vue'
import ConfirmPass from '../views/auth/Confirm-Password.vue'
import LoginConfirmPass from '../views/auth/Login-Confirm-Password.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/login-candidate',
    name: 'LoginC',
    component: LoginC
  },
  {
    path: '/login-recruiter',
    name: 'LoginR',
    component: LoginR
  },
  {
    path: '/register-candidate',
    name: 'RegisterC',
    component: RegisterC
  },
  {
    path: '/register-recruiter',
    name: 'RegisterR',
    component: RegisterR
  },
  {
    path: '/reset-password',
    name: 'ResetPass',
    component: ResetPass
  },
  {
    path: '/confirm-password',
    name: 'ConfirmPass',
    component: ConfirmPass
  },
  {
    path: '/login-confirm-password',
    name: 'LoginConfirmPass',
    component: LoginConfirmPass
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
