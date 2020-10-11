<template>
  <div style="width: 100%">
    <b-row class="login" align-h="center">
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
              <b-alert
                :show="alert"
                align="center"
                class="mt-3"
                variant="danger"
              >
                {{ isMsg }}
              </b-alert>
              <b-form
                @submit.prevent="$bvModal.show('modalLogin')"
                @reset.prevent="onReset"
              >
                <b-form-group label="Email">
                  <b-form-input
                    type="email"
                    v-model="form.user_email"
                    placeholder="Masukkan alamat email"
                  />
                </b-form-group>
                <b-form-group label="Password">
                  <b-input
                    type="password"
                    v-model="form.user_password"
                    placeholder="Masukkan kata sandi"
                  />
                </b-form-group>
                <b-row align-h="center" class="text-right">
                  <b-col>
                    <router-link to="/reset-password"
                      >Lupa kata sandi?</router-link
                    >
                  </b-col>
                </b-row>
                <br />
                <b-row>
                  <b-col>
                    <b-button
                      block
                      variant="warning"
                      class="my-3"
                      type="submit"
                      style="color: white"
                      @click="$bvModal.show('modalLogin')"
                      :disabled="isLoading"
                    >
                      <div v-if="isLoading">
                        <b-spinner small variant="light"></b-spinner>
                      </div>
                      <div v-else>Masuk</div>
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
              <b-modal id="modalLogin" centered hide-footer hide-header>
                <template>
                  <strong>LOGIN AS:</strong>
                </template>
                <div class="d-block text-center">
                  <b-row>
                    <b-col @click="$bvModal.hide('modalLogin')">
                      <b-button
                        variant="info"
                        class="mt-3"
                        block
                        @click="onSubmitCandidate()"
                        >CANDIDATE</b-button
                      >
                    </b-col>
                    <b-col @click="$bvModal.hide('modalLogin')">
                      <b-button
                        variant="warning"
                        style="color: white"
                        class="mt-3"
                        block
                        @click="onSubmitRecruiter()"
                        >RECRUITER</b-button
                      >
                    </b-col>
                  </b-row>
                </div>
              </b-modal>
              <b-row class="text-center">
                <b-col>
                  Anda belum punya akun?
                  <span @click="$bvModal.show('modalRegister')"
                    >Daftar disini</span
                  >
                  <b-modal id="modalRegister" hide-footer hide-header>
                    <template>
                      <strong>SELECT YOUR ROLE :</strong>
                    </template>
                    <div class="d-block text-center">
                      <b-row>
                        <b-col @click="$bvModal.hide('modalRegister')">
                          <b-button
                            variant="info"
                            class="mt-3"
                            block
                            @click="registerCandidatePage()"
                            >Candidate</b-button
                          >
                        </b-col>
                        <b-col @click="$bvModal.hide('modalRegister')">
                          <b-button
                            variant="warning"
                            style="color: white"
                            class="mt-3"
                            block
                            @click="registerRecruiterPage()"
                            >Recruiter</b-button
                          >
                        </b-col>
                      </b-row>
                    </div>
                  </b-modal>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      },
      alert: false,
      isMsg: '',
      isLoading: false
    }
  },
  computed: {
    ...mapGetters({ user_id: 'getUserId', recruiter_id: 'getRecruiterId' })
  },
  methods: {
    ...mapActions([
      'loginUser',
      'loginRecruiter',
      'getUserById',
      'getRecruiterById'
    ]),
    ...mapMutations(['setUser']),
    onSubmitRecruiter() {
      this.isLoading = true
      this.alert = false
      const newForm = {
        recruiter_email: this.form.user_email,
        recruiter_password: this.form.user_password
      }
      this.loginRecruiter(newForm)
        .then((result) => {
          this.$bvToast.toast('Anda berhasil login', {
            title: 'Status :',
            autoHideDelay: 500,
            appendToast: true
          })
          setTimeout(() => {
            this.$router.push('/home')
          }, 1500)
          this.getRecruiterById(result.data.recruiter_id)
        })
        .catch((error) => {
          this.alert = true
          this.isLoading = false
          this.isMsg = error.data.msg
        })
    },
    onSubmitCandidate() {
      this.isLoading = true
      this.alert = false
      this.loginUser(this.form)
        .then((result) => {
          this.$bvToast.toast('Anda berhasil login', {
            title: 'Status :',
            autoHideDelay: 500,
            appendToast: true
          })
          setTimeout(() => {
            this.$router.push('/profile')
          }, 1500)
          this.getUserById(result.data.user_id)
        })
        .catch((error) => {
          this.alert = true
          this.isLoading = false
          this.isMsg = error.data.msg
        })
    },
    registerCandidatePage() {
      this.$router.push('/register-candidate')
    },
    registerRecruiterPage() {
      this.$router.push('/register-recruiter')
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
.login {
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
  cursor: pointer;
}
</style>
