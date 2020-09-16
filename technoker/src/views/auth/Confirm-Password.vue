<template>
  <b-row class="login mx-0" align-h="center">
    <b-col sm="6" class="left">
      <b-row align-v="center" class="content-left">
        <b-col>
          <h2>Temukan developer berbakat &#38; terbaik di berbagai bidang keahlian</h2>
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
            <h5>You need to change your password to activate your account</h5>
            <b-form>
              Kata Sandi
              <b-row class="my-3" align-h="center">
                <b-col>
                  <b-input
                    type="password"
                    v-model="form.user_email"
                    placeholder="Masukkan alamat email"
                  />
                </b-col>
              </b-row>Confirmation new password
              <b-row class="my-3" align-h="center">
                <b-col>
                  <b-input
                    type="password"
                    v-model="form.user_email"
                    placeholder="Masukkan konfirmasi kata sandi"
                  />
                </b-col>
              </b-row>

              <b-row>
                <b-col>
                  <b-button block variant="warning" type="submit" class="my-3">Reset password</b-button>
                </b-col>
              </b-row>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'ConfirmPass',
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
.login {
  text-align: center;
  width: 100%;
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
