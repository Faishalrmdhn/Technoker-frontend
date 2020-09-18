<template>
  <div style="width:100%">
    <b-row class="registerC" align-h="center">
      <b-col sm="6" class="left">
        <b-row align-v="center" class="content-left">
          <b-col>
            <h2>Temukan developer berbakat &#38; terbaik di berbagai bidang keahlian</h2>
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="6" class="right">
        <b-alert :show="alert" class="m-3" variant="danger">{{ isMsg }}</b-alert>
        <b-row class="content-right" align-v="center">
          <b-col>
            <div class="text-left p-3">
              <h3>
                <strong>Halo, Pewpeople</strong>
              </h3>
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
                tempore.
              </h5>
              <b-form @submit.prevent="onSubmit" style="color:grey;">
                <b-form-group label="Nama">
                  <b-input
                    type="text"
                    v-model="form.user_name"
                    placeholder="Masukkan nama panjang"
                  />
                </b-form-group>
                <b-form-group label="Email">
                  <b-input
                    type="email"
                    v-model="form.user_email"
                    placeholder="Masukkan alamat email"
                  />
                </b-form-group>
                <b-form-group label="No. Handphone">
                  <b-input
                    type="number"
                    v-model="form.user_phone"
                    placeholder="Masukkan nomer handphone"
                  />
                </b-form-group>
                <b-form-group label="Password">
                  <b-input
                    type="password"
                    v-model="form.user_password"
                    placeholder="Masukkan kata sandi"
                  />
                </b-form-group>
                <b-form-group label="Konfirmasi kata sandi">
                  <b-input
                    type="password"
                    v-model="form.user_confirm_password"
                    placeholder="Masukkan konfirmasi kata sandi"
                  />
                </b-form-group>
                <b-row>
                  <b-col>
                    <b-button
                      block
                      style="color:white;"
                      variant="warning"
                      type="submit"
                      class="my-3"
                    >Masuk</b-button>
                  </b-col>
                </b-row>
                <b-row class="text-center">
                  <b-col>
                    Anda sudah punya akun?
                    <router-link to="/login">
                      <span>Masuk disini</span>
                    </router-link>
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
  name: 'RegisterC',
  data() {
    return {
      alert: false,
      isMsg: '',
      form: {
        user_name: '',
        user_email: '',
        user_password: '',
        user_phone: '',
        user_confirm_password: ''
      }
    }
  },
  computed: {},
  methods: {
    ...mapActions(['registerUser']),
    onSubmit() {
      console.log(this.form)
      if (this.form.user_email === '') {
        this.alert = true
        this.isMsg = "Email can't be empty"
        setTimeout(() => {
          this.alert = false
        }, 2000)
      } else if (this.form.user_password === '') {
        this.alert = true
        this.isMsg = "Password can't be empty"
        setTimeout(() => {
          this.alert = false
        }, 2000)
      } else if (
        this.form.user_password.length < 8 ||
        this.form.user_password.length > 16
      ) {
        this.alert = true
        this.isMsg = 'Password must be 8-16 characters'
        setTimeout(() => {
          this.alert = false
        }, 2000)
      } else if (this.form.user_password !== this.form.user_confirm_password) {
        this.alert = true
        this.isMsg = 'Password do not match'
        setTimeout(() => {
          this.alert = false
        }, 2000)
      } else if (this.form.user_name === '') {
        this.alert = true
        this.isMsg = "Name can't be empty"
        setTimeout(() => {
          this.alert = false
        }, 2000)
      } else if (this.form.user_phone.length > 15) {
        this.alert = true
        this.isMsg = 'Phone number cannot be more than 15 digits'
        setTimeout(() => {
          this.alert = false
        }, 2000)
      } else {
        this.registerUser(this.form)
          .then((result) => {
            console.log(result)
            this.$router.push('/login')
          })
          .catch((error) => {
            console.log(error.data.msg)
            if (error.data.msg === 'Email has been registered') {
              this.alert = true
              this.isMsg = error.data.msg
              setTimeout(() => {
                this.alert = false
              }, 2000)
            }
          })
      }
    }
  }
}
</script>

<style scoped>
.registerC {
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
