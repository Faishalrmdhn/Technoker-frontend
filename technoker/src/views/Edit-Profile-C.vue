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
        <button class="btn1" @click="getEditUser" block>Simpan</button>
        <button class="btn2" block @click="back">Batal</button>
      </div>
      <div class="hire-info">
        <div>
          <b-card header="Data Diri">
            <b-card-text>
              <b-form v-if="show" style="color:grey;">
                <b-form-group
                  id="input-group-2"
                  label="Nama Lengkap"
                  label-for="input-2"
                >
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="formUser.user_name"
                    required
                    placeholder="Enter name"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="Job Desk"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    type="text"
                    v-model="formUser.user_job_desk"
                    required
                    placeholder="Masukkan Job desk"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  label="Domisili"
                  label-for="input-2"
                >
                  <b-form-input
                    type="text"
                    v-model="formUser.user_location"
                    id="input-2"
                    required
                    placeholder="Masukkan Domisili"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Tempat Kerja">
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="user_workplace"
                    required
                    placeholder="Masukkan Tempat Kerja"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Upload Gambar">
                  <b-form-file
                    v-model="formUser.user_image"
                    @change="handleFile"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  label="Deskripsi Singkat"
                  label-for="textarea"
                >
                  <b-form-textarea
                    id="textarea"
                    placeholder="Jelaskan lebih detail"
                    v-model="formUser.user_about"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
              </b-form>
            </b-card-text>
          </b-card>
        </div>
        <!-- ==========================SKILL========================== -->
        <div class="mt-3">
          <b-card header="Skill">
            <b-form v-if="show" style="color:grey;">
              <b-row align-h="between">
                <b-col sm="9">
                  <b-input
                    type="text"
                    id="input-2"
                    v-model="skill"
                    required
                    placeholder="java"
                  />
                </b-col>
                <b-col sm="3">
                  <b-button
                    block
                    variant="warning"
                    style="color:white"
                    class="btn-save-skill"
                    @click="getSkill"
                    >Simpan</b-button
                  >
                </b-col>
              </b-row>
            </b-form>
            <div></div>
          </b-card>
        </div>
        <!-- ===============================EXPERIENCE================================ -->
        <div class="mt-3">
          <b-card header="Pengalaman Kerja">
            <b-card-text>
              <b-form v-if="show" style="color:grey;">
                <b-form-group
                  id="input-group-2"
                  label="Posisi"
                  label-for="input-2"
                >
                  <b-form-input
                    type="text"
                    id="input-2"
                    required
                    v-model="formExperience.experience_position"
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
                        type="text"
                        required
                        v-model="formExperience.experience_company"
                        placeholder="PT Maju Mundur"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
              <b-form v-if="show" style="color:grey;">
                <b-row>
                  <b-col>
                    <b-form-group
                      id="input-group-2"
                      label="Bulan / Tahun Masuk"
                      label-for="input-2"
                    >
                      <b-form-input
                        type="text"
                        id="input-2"
                        required
                        v-model="formExperience.experience_date_in"
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
                        required
                        v-model="formExperience.experience_date_out"
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
                    placeholder="Deskripsikan pekerjaan anda"
                    rows="3"
                    v-model="formExperience.experience_desc"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
                <b-button
                  block
                  variant="outline-warning"
                  class="mt-5 btn-hire"
                  @click="addExperience"
                  >Tambah pengalaman kerja</b-button
                >
              </b-form>
            </b-card-text>
          </b-card>
        </div>
        <!-- ==========================================PORTFOLIO=============================================== -->
        <div class="mt-3">
          <b-card header="Portofolio">
            <b-card-text>
              <b-form
                v-on:submit.prevent="getPortfolio"
                v-if="show"
                style="color:grey;"
              >
                <b-form-group
                  id="input-group-2"
                  label="Nama Aplikasi"
                  label-for="input-2"
                >
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="formPortfolio.portofolio_name"
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
                    v-model="formPortfolio.portofolio_repository"
                    type="text"
                    required
                    placeholder="Masukkan link repository"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Type Portofolio">
                  <b-form-checkbox
                    id="checkbox-1"
                    name="checkbox-1"
                    v-model="portofolio_type"
                    value="1"
                    unchecked-value="null"
                    >Aplikasi Mobile</b-form-checkbox
                  >
                  <b-form-checkbox
                    id="checkbox-2"
                    name="checkbox-2"
                    v-model="portofolio_type"
                    value="2"
                    unchecked-value="null"
                    >Aplikasi Web</b-form-checkbox
                  >
                </b-form-group>
                <!-- IMAGE -->
                <b-form-group label="Upload Gambar">
                  <b-form-file
                    v-model="formPortfolio.portofolio_image"
                    @change="handleFile"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
                </b-form-group>

                <b-button
                  variant="outline-warning"
                  block
                  class="mt-5 btn-hire"
                  @click="getPortfolio"
                  >Tambah Portofolio</b-button
                >
              </b-form>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
      formUser: {
        user_name: '',
        user_job_desk: '',
        user_location: '',
        user_image: {},
        user_about: '',
        user_workplace: ''
      },
      formExperience: {
        experience_position: '',
        experience_company: '',
        experience_date_in: '',
        experience_date_out: '',
        experience_desc: ''
      },
      formPortfolio: {
        portofolio_image: {},
        portofolio_name: '',
        portofolio_repository: ''
      },
      portofolio_type: '',
      show: true,
      skill: '',
      port: 'http://127.0.0.1:4000/profile/',
      userId: ''
    }
  },
  computed: {
    ...mapGetters({ user: 'getUser' })
  },
  created() {
    this.userId = {
      user_id: this.user.user_id
    }
  },
  methods: {
    ...mapActions([
      'postSkill',
      'postPortfolio',
      'patchUser',
      'getUserById',
      'postExperience',
      'getUserById'
    ]),
    getSkill() {
      const setData = {
        skill_name: this.skill,
        user_id: this.user.user_id
      }
      this.postSkill(setData)
        .then(res => {
          this.$bvToast.toast(res.data.msg, {
            title: 'Status :',
            autoHideDelay: 500,
            appendToast: true
          })
        })
        .catch(err => {
          this.$bvToast.toast(err.data.msg, {
            title: 'Status :',
            autoHideDelay: 500,
            appendToast: true
          })
        })
    },
    handleFile(event) {
      this.formPortfolio.portofolio_image = event.target.files[0]
    },
    getEditUser() {
      const data = new FormData()
      data.append('user_name', this.formUser.user_name)
      data.append('user_job_desk', this.formUser.user_job_desk)
      data.append('user_location', this.formUser.user_location)
      data.append('user_image', this.formUser.user_image)
      data.append('user_about', this.formUser.user_about)
      data.append('user_workplace', this.formUser.user_workplace)
      const setData = {
        user_id: this.userId.user_id,
        FormData: data
      }
      this.patchUser(setData)
        .then(res => {
          this.$bvToast.toast('Data Successfully Updated', {
            title: 'Status :',
            autoHideDelay: 1000,
            appendToast: true
          })
        })
        .catch(err => {
          this.$bvToast.toast(err.data.msg, {
            title: 'Status :',
            autoHideDelay: 1000,
            appendToast: true
          })
        })
    },
    addExperience() {
      const setData = {
        experience_position: this.formExperience.experience_position,
        experience_company: this.formExperience.experience_company,
        experience_date_in: this.formExperience.experience_date_in,
        experience_date_out: this.formExperience.experience_date_out,
        experience_desc: this.formExperience.experience_desc,
        user_id: this.user.user_id
      }
      this.postExperience(setData)
        .then(res => {
          this.$bvToast.toast(res.data.msg, {
            title: 'Status :',
            autoHideDelay: 500,
            appendToast: true
          })
        })
        .catch(err => {
          this.$bvToast.toast(err.data.msg, {
            title: 'Status :',
            autoHideDelay: 500,
            appendToast: true
          })
        })
    },
    getPortfolio() {
      const data = new FormData()
      data.append('portofolio_name', this.formPortfolio.portofolio_name)
      data.append('portofolio_image', this.formPortfolio.portofolio_image)
      data.append('portofolio_type', this.portofolio_type)
      data.append(
        'portofolio_repository',
        this.formPortfolio.portofolio_repository
      )
      data.append('user_id', this.userId.user_id)
      this.postPortfolio(data)
        .then(res => {
          this.$bvToast.toast(res.data.msg, {
            title: 'Status :',
            autoHideDelay: 500,
            appendToast: true
          })
        })
        .catch(err => {
          this.$bvToast.toast(err.data.msg, {
            title: 'Status :',
            autoHideDelay: 500,
            appendToast: true
          })
        })
    },
    back() {
      this.$router.push('/profile')
    }
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

  .btn-save-skill {
    margin-top: 20px;
  }
}
</style>
