<template>
  <div style="width: 100%">
    <b-row class="confirmPass" align-h="center">
      <b-col sm="6" class="left">
        <b-row align-v="center" class="content-left">
          <b-col>
            <img class="logo" src="../../assets/technoker_auth.png" alt />
            <h2>
              Temukan developer berbakat &#38; terbaik di berbagai bidang
              keahlian
            </h2>
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="6" class="right">
        <b-row class="content-right" align-v="center">
          <b-col>
            <div class="text-left p-3">
              <h3>
                <strong>Reset Password</strong>
              </h3>
              <p>You need to change your password to activate your account</p>
              <b-form style="color: grey" @submit.prevent="onSubmit">
                <b-form-group label="Key (from the email we have sent to you)">
                  <b-input
                    type="number"
                    v-model="form.user_key"
                    placeholder="Masukkan key"
                  />
                </b-form-group>
                <b-alert :show="alert" class="m-3" variant="danger">{{
                  isMsg
                }}</b-alert>
                <b-form-group label="Kata Sandi">
                  <b-input
                    type="password"
                    v-model="form.user_password"
                    placeholder="Masukkan kata sandi"
                  />
                </b-form-group>
                <b-form-group label="Confirmation new password">
                  <b-input
                    type="password"
                    v-model="form.user_confirm_password"
                    placeholder="Masukkan konfirmasi kata sandi"
                  />
                </b-form-group>
                <b-row>
                  <b-col>
                    <b-button
                      style="color: white"
                      block
                      variant="warning"
                      type="submit"
                      class="my-3"
                      >Reset password</b-button
                    >
                  </b-col>
                </b-row>
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'ConfirmPass',
  data() {
    return {
      alert: false,
      isMsg: '',
      form: {
        user_key: null,
        user_password: '',
        user_confirm_password: ''
      },
      urlParams: new URLSearchParams(window.location.search)
    }
  },
  computed: {},
  methods: {
    ...mapActions(['updatePasswordUser', 'updatePasswordRecruiter']),
    onSubmit() {
      this.updatePasswordUser(this.form)
        .then((result) => {
          console.log('dibawah')
          console.log(result)
          this.$bvToast.toast(result.msg, {
            title: 'Status :',
            autoHideDelay: 2000,
            appendToast: true
          })
          setTimeout(() => {
            this.$router.push('/login')
          }, 1500)
        })
        .catch((error) => {
          if (error) {
            const newForm = {
              recruiter_key: this.form.user_key,
              recruiter_password: this.form.user_password,
              recruiter_password_confirmation: this.form.user_confirm_password
            }
            this.updatePasswordRecruiter(newForm)
              .then((result) => {
                this.$bvToast.toast(result.msg, {
                  title: 'Status :',
                  autoHideDelay: 1500,
                  appendToast: true
                })
                setTimeout(() => {
                  this.$router.push('/login')
                }, 2000)
              })
              .catch((error) => {
                console.log(error)
                this.$bvToast.toast(error.data.msg, {
                  title: 'Status :',
                  autoHideDelay: 1500,
                  appendToast: true
                })
              })
          }
        })
      //   this.$bvToast.toast(
      //     'Password telah berhasil direset, Anda kan di direct kehalaman login',
      //     {
      //       title: 'Status :',
      //       autoHideDelay: 8000,
      //       appendToast: true
      //     }
      //   )
      //   setTimeout(() => {
      //     this.$router.push('/login')
      //   }, 3000)
      // },
      // onSubmit() {
      //   const role = this.urlParams.get('role')
      //   const keys = this.urlParams.get('keys')
      //   this.form.user_key = keys
      //   if (role === '1') {
      //     this.updatePasswordUser(this.form)
      //       .then((result) => {
      //         this.onSuccess()
      //       })
      //       .catch((error) => {
      //         this.alert = true
      //         this.isMsg = error.data.msg
      //         setTimeout(() => {
      //           this.alert = false
      //         }, 8000)
      //       })
      //   } else {
      //     this.updatePasswordRecruiter(this.form)
      //       .then((result) => {
      //         this.onSuccess()
      //       })
      //       .catch((error) => {
      //         this.alert = true
      //         this.isMsg = error.data.msg
      //         setTimeout(() => {
      //           this.alert = false
      //         }, 8000)
      //       })
      //   }
    }
  }
}
</script>
<style scoped>
.logo {
  position: relative;
  top: -265px;
  left: -200px;
  z-index: 2;
}

.confirmPass {
  text-align: center;
  width: 90%;
  margin: 30px 50px;
  height: 100vh;
  background-color: #f6f7f8;
}

.content-left {
  color: azure;
  height: 100%;
  background-image: linear-gradient(
      rgba(94, 80, 161, 0.5),
      rgba(94, 80, 161, 0.5)
    ),
    url('../../assets/bg-login2.jpg');
  background-size: cover;
}

.content-right {
  height: 100%;
}

.left {
  height: 100%;
  width: 100%;
}

.right {
  /* color: aqua; */
  height: 100%;
  width: 100%;
}

span {
  color: #fbb017;
}
</style>
