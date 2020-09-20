<template>
  <div style="width:100%; background-color: #E5E5E5; position:relative;">
    <Header
      class="py-4"
      style="background-color: white; box-shadow: 0px 10px 50px rgba(132, 132, 132, 0.25); position:relative; z-index:5555;"
    />
    <div class="magenta"></div>
    <div class="page-container">
      <div class="profile-info">
        <div class="image">
          <img class="image" :src="port + user.user_image" alt />
        </div>
        <div style="padding:0 30px" class="mt-5">
          <h4>{{ user.user_name }}</h4>
          <h6>{{ user.user_job_desk }}</h6>
          <p style="color:grey;">
            <span>
              <img src="../assets/img/location.png" alt />
            </span>
            {{ user.user_location }}
          </p>
          <p style="color:grey;">{{ user.user_job_type }}</p>
        </div>
        <button class="btn1" @click="onSubmit()" block>
          Simpan
        </button>
        <button class="btn2" block>Batal</button>
      </div>
      <div class="hire-info">
        <div>
          <b-card header="Data Diri">
            <b-card-text>
              <!-- @submit="onSubmit" -->
              <b-form v-if="show" style="color:grey;">
                <b-form-group label="Nama Lengkap">
                  <b-form-input
                    type="text"
                    v-model="formData.user_name"
                    required
                    placeholder="Enter name"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Job Desk">
                  <b-form-input
                    id="input-1"
                    v-model="formData.user_job_desk"
                    type="text"
                    required
                    placeholder="Masukkan Job desk"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Domisili">
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="formData.user_location"
                    required
                    placeholder="Masukkan Domisili"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Tempat Kerja">
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="formData.user_workPlace"
                    required
                    placeholder="Masukkan Tempat Kerja"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  label="Deskripsi Singkat"
                  label-for="textarea"
                >
                  <b-form-textarea
                    id="textarea"
                    v-model="formData.about"
                    placeholder="Jelaskan lebih detail"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
              </b-form>
            </b-card-text>
          </b-card>
        </div>
        <!-- ========================================================= -->
        <div class="mt-3">
          <b-card header="Skill">
            <!-- <b-form @submit="onSubmit" v-if="show" style="color:grey;">
              <b-row align-h="between">
                <b-col sm="9">
                  <b-input
                    type="text"
                    id="input-2"
                    v-model="form.user_skill"
                    required
                    placeholder="java"
                  />
                </b-col>
                <b-col sm="3">
                  <b-button block variant="warning" style="color:white"
                    >Simpan</b-button
                  >
                </b-col>
              </b-row>
            </b-form> -->
            <div></div>
          </b-card>
        </div>
        <!-- =================================================================== -->
        <div class="mt-3">
          <b-card header="Pengalaman Kerja">
            <b-card-text>
              <b-form @submit="onSubmitExp" v-if="show" style="color:grey;">
                <b-form-group
                  id="input-group-2"
                  label="Posisi"
                  label-for="input-2"
                >
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="formExp.experience_position"
                    required
                    placeholder="web developer"
                  ></b-form-input>
                </b-form-group>
                <b-row>
                  <b-col>
                    <b-form-group
                      id="input-group-1"
                      label="Nama Perusahaan"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="formExp.experience_company"
                        type="text"
                        required
                        placeholder="PT Maju Mundur"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group
                      id="input-group-2"
                      label="Bulan / Tahun Masuk"
                      label-for="input-2"
                    >
                      <b-form-input
                        type="text"
                        id="input-2"
                        v-model="formExp.experience_date_in"
                        required
                        placeholder="Januari 2018"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <!-- =================== -->
                  <b-col>
                    <b-form-group
                      id="input-group-2"
                      label="Bulan / Tahun Keluar"
                      label-for="input-2"
                    >
                      <b-form-input
                        type="text"
                        id="input-2"
                        v-model="formExp.experience_date_out"
                        required
                        placeholder="Januari 2018"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-form-group
                  id="input-group-2"
                  label="Deskripsi Singkat"
                  label-for="textarea"
                >
                  <b-form-textarea
                    id="textarea"
                    v-model="formExp.experience_desc"
                    placeholder="Deskripsikan pekerjaan anda"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
                <b-button
                  block
                  variant="outline-warning"
                  class="mt-5 btn-hire"
                  type="submit"
                  >Tambah pengalaman kerja</b-button
                >
              </b-form>
            </b-card-text>
          </b-card>
        </div>
        <!-- ============================================================================================= -->
        <div class="mt-3">
          <!-- <b-card header="Portofolio">
            <b-card-text>
              <b-form @submit="onSubmit" v-if="show" style="color:grey;">
                <b-form-group
                  id="input-group-2"
                  label="Nama Aplikasi"
                  label-for="input-2"
                >
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="form.user_porto_app"
                    required
                    placeholder="Masukkan nama aplikasi"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="Link Repository"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.user_porto_repo"
                    type="text"
                    required
                    placeholder="Masukkan link repository"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Type Portofolio">
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="status"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="aplikasi mobile"
                    >Aplikasi Mobile</b-form-checkbox
                  >
                  <b-form-checkbox
                    id="checkbox-2"
                    v-model="status"
                    name="checkbox-2"
                    value="accepted"
                    unchecked-value="aplikasi web"
                    >Aplikasi Web</b-form-checkbox
                  >
                </b-form-group>

                <b-form-group label="Upload Gambar">
                  <b-form-file
                    v-model="file1"
                    :state="Boolean(file1)"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
                </b-form-group>

                <b-button variant="outline-warning" block class="mt-5 btn-hire"
                  >Tambah Portofolio</b-button
                >
              </b-form>
            </b-card-text>
          </b-card> -->
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex' //  mapGetters
import Header from '../components/HeaderLogin'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    Footer
  },
  name: 'EditProfileC',
  data() {
    return {
      status: '',
      formData: {
        user_name: '',
        user_job_desk: '',
        user_location: '',
        user_workPlace: '',
        about: ''
      },
      formExp: {
        experience_company: '',
        experience_position: '',
        experience_date_in: '',
        experience_date_out: '',
        experience_desc: ''
      },
      checked: [],
      show: true,
      port: 'http://127.0.0.1:4000/profile/'
    }
  },

  computed: {
    // ...mapGetters({ user: 'user' }),
    ...mapState(['user'])
  },
  methods: {
    onSubmitData() {},
    onSubmitExp() {}
  }
}
</script>

<style scoped>
.magenta {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  height: 250px;
  background-color: #5e50a1;
  z-index: 0;
}

.page-container {
  position: relative;
  top: -250px;
  display: grid;
  margin: 70px auto;
  width: 85%;
  grid-template-columns: 1fr 1fr;
  z-index: 1;
}

.profile-info {
  width: 400px;
  height: 400px;
  border-radius: 8px;
  background-color: white;
  position: relative;
  z-index: 2;
}

.hire-info {
  /* background-color: white; */
  border-radius: 8px;
  width: 700px;
  margin-bottom: -250px;
  position: relative;
  z-index: 2;
}

.image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  /* background: black; */
  margin: 30px auto;
}

.btn1 {
  padding: 5px 0px;
  font-weight: bold;
  background: #5e50a1;
  width: 100%;
  color: white;
  border-radius: 4px;
  border: 1px solid #5e50a1;
  margin-bottom: 10px;
}
.btn1:hover {
  font-weight: bold;
  background-color: white;
  color: #5e50a1;
}

.btn2 {
  padding: 5px 0px;
  font-weight: bold;
  color: #5e50a1;
  width: 100%;
  background: white;
  border: 1px solid #5e50a1;
  border-radius: 4px;
}

.btn2:hover {
  font-weight: bold;
  background-color: #5e50a1;
  color: white;
}
@media (max-width: 700px) {
  .page-container {
    grid-template-columns: 1fr;
  }

  .profile-info {
    width: 375px;
  }

  .hire-info {
    margin-top: 100px;
    width: 375px;
    margin-bottom: -250px;
  }
}
</style>
