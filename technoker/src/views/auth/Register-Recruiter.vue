<template>
  <div style="width: 100%">
    <b-row class="registerR" align-h="center">
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
                <strong>Halo, Technokerian!</strong>
              </h3>
              <p>Get Your Job More Easier &#38; Quicker!</p>
              <b-form @submit.prevent="onSubmit('danger')" style="color: grey">
                <b-form-group label="Nama">
                  <b-input
                    type="text"
                    v-model="form.recruiter_name"
                    placeholder="Masukkan nama panjang"
                  />
                </b-form-group>
                <b-form-group label="Email">
                  <b-input
                    type="email"
                    v-model="form.recruiter_email"
                    placeholder="Masukkan alamat email"
                  />
                </b-form-group>
                <b-form-group label="Perusahaan">
                  <b-input
                    type="text"
                    v-model="form.recruiter_company"
                    placeholder="Masukkan nama perusahaan"
                  />
                </b-form-group>
                <b-form-group label="Jabatan">
                  <b-input
                    type="text"
                    v-model="form.recruiter_position"
                    placeholder="Posisi di perusahaan anda"
                  />
                </b-form-group>
                <b-form-group label="No. Handphone">
                  <b-input
                    type="number"
                    v-model="form.recruiter_phone"
                    placeholder="Masukkan nomer handphone"
                  />
                </b-form-group>
                <b-form-group label="Password">
                  <b-input
                    type="password"
                    v-model="form.recruiter_password"
                    placeholder="Masukkan kata sandi"
                  />
                </b-form-group>
                <b-form-group label="Konfirmasi kata sandi">
                  <b-input
                    type="password"
                    v-model="form.recruiter_password_confirmation"
                    placeholder="Masukkan konfirmasi kata sandi"
                  />
                </b-form-group>
                <b-row>
                  <b-col>
                    <b-button
                      block
                      style="color: white"
                      variant="warning"
                      type="submit"
                      class="my-3"
                      >Sign up</b-button
                    >
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
  name: 'RegisterR',
  data() {
    return {
      alert: false,
      isMsg: '',
      form: {
        recruiter_name: '',
        recruiter_email: '',
        recruiter_password: '',
        recruiter_phone: '',
        recruiter_password_confirmation: '',
        recruiter_position: '',
        recruiter_company: ''
      }
    }
  },
  computed: {},
  methods: {
    ...mapActions(['registerRecruiter']),
    onSubmit(variant = null) {
      console.log(this.form)
      // if (
      //   this.form.recruiter_name === '' ||
      //   this.form.recruiter_name === undefined ||
      //   this.form.recruiter_email === '' ||
      //   this.form.recruiter_email === undefined ||
      //   this.form.recruiter_company === '' ||
      //   this.form.recruiter_company === undefined ||
      //   this.form.recruiter_position === '' ||
      //   this.form.recruiter_position === undefined ||
      //   this.form.recruiter_phone === '' ||
      //   this.form.recruiter_phone === undefined ||
      //   this.form.recruiter_password === '' ||
      //   this.form.recruiter_password === undefined ||
      //   this.form.recruiter_password_confirmation === '' ||
      //   this.form.recruiter_password_confirmation === undefined
      // ) {
      //   this.alert = true
      //   this.isMsg = "The data you've entered is not complete!"
      //   setTimeout(() => {
      //     this.alert = false
      //   }, 2000)
      // } else {
      this.registerRecruiter(this.form)
        .then((response) => {
          console.log(response)
          this.$bvToast.toast(response.msg, {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          setTimeout(() => {
            this.$router.push('/login')
          }, 2000)
        })
        .catch((error) => {
          console.log(error.response)
          this.$bvToast.toast(error.response.data.msg, {
            title: 'Warning',
            variant: variant,
            solid: true
          })
        })
      // }
    }
  }
}
</script>

<style scoped>
.logo {
  position: relative;
  top: -160px;
  left: -200px;
  z-index: 2;
}
.registerR {
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
