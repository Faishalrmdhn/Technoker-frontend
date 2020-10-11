// import axios from 'axios'
// import router from '../../router/index'
// export default {
//   state: {
//     urlAPI: process.env.VUE_APP_URL
//   },
//   mutation: {},
//   actions: {
//     patchDataUser(context, payload) {
//       return new Promise((resolve, reject) => {
//         axios
//           .patch(`${context.state.urlAPI}user/${payload}`, payload)
//           .then(response => {
//             console.log(payload)
//             resolve(response.data)
//           })
//           .catch(error => {
//             reject(error.response)
//             console.log('error di auth')
//           })
//       })
//     }
//   },
//   getters: {}
// }
