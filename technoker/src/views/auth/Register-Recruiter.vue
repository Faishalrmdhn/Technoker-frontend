<template>
  <b-row class="login mx-0" align-h="center">
    <b-col sm="6" class="left">
      <b-row align-v="center" class="content-left">
        <b-col
          ><h2>
            Temukan developer berbakat &#38; terbaik di berbagai bidang keahlian
          </h2></b-col
        ></b-row
      ></b-col
    >
    <b-col sm="6" class="right"
      ><b-row class="content-right" align-v="center"
        ><b-col>
          <div class="text-left p-3">
            <h3><strong>Halo, Pewpeople</strong></h3>
            <h5>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              tempore.
            </h5>
            <b-form>
              Nama
              <b-row class="my-3" align-h="center">
                <b-col>
                  <b-input
                    type="text"
                    v-model="form.user_email"
                    placeholder="Masukkan nama panjang"
                  />
                </b-col>
              </b-row>
              Email
              <b-row class="my-3" align-h="center">
                <b-col>
                  <b-input
                    type="email"
                    v-model="form.user_email"
                    placeholder="Masukkan alamat email"
                  />
                </b-col>
              </b-row>
              Perusahaan
              <b-row class="my-3" align-h="center">
                <b-col>
                  <b-input
                    type="text"
                    v-model="form.user_email"
                    placeholder="Masukkan nama perusahaan"
                  />
                </b-col>
              </b-row>
              Jabatan
              <b-row class="my-3" align-h="center">
                <b-col>
                  <b-input
                    type="text"
                    v-model="form.user_email"
                    placeholder="Posisi di perusahaan anda"
                  />
                </b-col>
              </b-row>
              No Handphone
              <b-row class="my-3" align-h="center">
                <b-col>
                  <b-input
                    type="text"
                    v-model="form.user_email"
                    placeholder="Masukkan nomer handphone"
                  />
                </b-col>
              </b-row>
              Kata Sandi
              <b-row align-h="center">
                <b-col>
                  <b-input
                    type="password"
                    v-model="form.user_password"
                    placeholder="Masukkan kata sandi"
                  />
                </b-col>
              </b-row>
              Konfirmasi kata sandi
              <b-row align-h="center">
                <b-col>
                  <b-input
                    type="password"
                    v-model="form.user_password"
                    placeholder="Masukkan konfirmasi kata sandi"
                  />
                </b-col>
              </b-row>
              <b-row class="text-right"><b-col> Lupa kata sandi?</b-col></b-row>

              <b-row
                ><b-col
                  ><b-button block variant="warning" type="submit" class="my-3"
                    >Masuk</b-button
                  ></b-col
                >
              </b-row>
              <b-row class="text-center">
                <b-col> Anda sudah punya akun? <span>Masuk disini</span></b-col>
              </b-row>
            </b-form>
          </div>
        </b-col></b-row
      ></b-col
    >
  </b-row>
</template>

<script>
export default {
  name: 'RegisterR',
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
    url('../../assets/bg-login.jpg');
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
