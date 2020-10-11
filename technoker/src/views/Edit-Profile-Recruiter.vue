<template>
  <div>
    <HeaderLogin class="py-2" style="background-color: white" />
    <div class="magenta"></div>
    <div style="background-color: #e5e5e5; margin-bottom: -150px" class="py-2">
      <b-container style="position: relative; top: -275px">
        <b-row class="mt-5">
          <div class="profile-info col-md-4">
            <div class="image">
              <b-avatar size="11rem" class="my-3">
                <b-img
                  center
                  v-if="recruiter.recruiter_profile_image !== null"
                  fluid
                  :src="port + recruiter.recruiter_profile_image"
                  alt="Image 1"
                  class="image"
                ></b-img>
                <img
                  center
                  class="user-img"
                  v-if="recruiter.recruiter_profile_image === null"
                  fluid
                  src="../assets/img/default.png"
                  alt="Image Default"
                />
              </b-avatar>
            </div>
            <div class="name-box mb-5">
              <h4>{{ recruiter.recruiter_company }}</h4>
              <p>{{ recruiter.recruiter_field }}</p>
              <p class="mt-3 text-muted">
                <b-icon icon="geo-alt" variant="secondary"></b-icon>
                {{ recruiter.recruiter_location }}
              </p>
            </div>
            <router-link to="/profile-company">
              <b-button block class="mt-5 btn-cancel">Batal</b-button>
            </router-link>
          </div>
          <b-col md="1"></b-col>
          <div class="hire-info col-md-7">
            <b-card header="Data Diri">
              <div>
                <b-form @submit.prevent="onUpdate">
                  <b-form-group
                    id="input-group-2"
                    label="Nama Perusahaan"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.recruiter_company"
                      placeholder="Masukkan nama perusahaan"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group label="Upload Gambar">
                    <b-form-file
                      v-model="form.recruiter_profile_image"
                      @change="handleFile"
                      placeholder="Choose a file or drop it here..."
                      drop-placeholder="Drop file here..."
                    ></b-form-file>
                  </b-form-group>
                  <b-form-group
                    id="input-group-2"
                    label="Bidang"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.recruiter_field"
                      placeholder="Masukkan nama bidang perusahaan ex: Financial"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-2"
                    label="Kota"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.recruiter_location"
                      placeholder="Masukkan kota"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-2"
                    label="Deskripsi:"
                    label-for="textarea"
                  >
                    <b-form-textarea
                      id="textarea"
                      v-model="form.recruiter_about"
                      placeholder="Jelaskan lebih detail"
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </b-form-group>
                  <b-form-group
                    id="input-group-2"
                    label="Instagram"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.recruiter_instagram"
                      placeholder="Masukkan nama instagram"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-2"
                    label="Nomor Telepon"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.recruiter_phone"
                      placeholder="Masukkan no telepon"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-2"
                    label="LinkedIn"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.recruiter_linkedin"
                      required
                      placeholder="Masukkan LinkedIn"
                    ></b-form-input>
                  </b-form-group>
                  <b-button block class="mt-4 btn-save" type="submit"
                    >Simpan</b-button
                  >
                </b-form>
              </div>
            </b-card>
          </div>
        </b-row>
      </b-container>
    </div>
    <Footer style="position: relative; z-index: 0" />
  </div>
</template>
<script>
import HeaderLogin from '../components/HeaderLogin'
import Footer from '../components/Footer'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'EditProfileRecruiter',
  data() {
    return {
      form: {
        recruiter_company: '',
        recruiter_field: '',
        recruiter_location: '',
        recruiter_profile_image: {},
        recruiter_about: '',
        recruiter_instagram: '',
        recruiter_phone: '',
        recruiter_linkedin: ''
      },
      port: `${process.env.VUE_APP_URL}profile/`
    }
  },
  components: {
    HeaderLogin,
    Footer
  },
  created() {
    this.setFormData()
    this.getRecruiterById(this.recruiter.recruiter_id)
  },
  computed: {
    ...mapGetters(['recruiter'])
  },
  methods: {
    handleFile(event) {
      this.form.recruiter_profile_image = event.target.files[0]
      console.log(this.form.recruiter_profile_image)
    },
    ...mapActions(['getRecruiterById', 'patchRecruiter']),
    setFormData() {
      this.form.recruiter_company = this.recruiter.recruiter_company
      this.form.recruiter_field = this.recruiter.recruiter_field
      this.form.recruiter_location = this.recruiter.recruiter_location
      this.form.recruiter_profile_image = this.recruiter.recruiter_profile_image
      this.form.recruiter_about = this.recruiter.recruiter_about
      this.form.recruiter_instagram = this.recruiter.recruiter_instagram
      this.form.recruiter_phone = this.recruiter.recruiter_phone
      this.form.recruiter_linkedin = this.recruiter.recruiter_linkedin
    },
    onUpdate() {
      const data = new FormData()
      data.append('recruiter_company', this.form.recruiter_company)
      data.append('recruiter_field', this.form.recruiter_field)
      data.append('recruiter_location', this.form.recruiter_location)
      data.append('recruiter_profile_image', this.form.recruiter_profile_image)
      data.append('recruiter_about', this.form.recruiter_about)
      data.append('recruiter_phone', this.form.recruiter_phone)
      data.append('recruiter_instagram', this.form.recruiter_instagram)
      data.append('recruiter_linkedin', this.form.recruiter_linkedin)
      const setData = {
        recruiter_id: this.recruiter.recruiter_id,
        FormData: data
      }
      this.patchRecruiter(setData)
        .then((result) => {
          this.$bvToast.toast('Data Berhasil di Update', {
            title: 'Success :',
            autoHideDelay: 500,
            appendToast: true,
            variant: 'success'
          })
          setTimeout(() => {
            this.$router.push('/profile-company')
          }, 2000)
        })
        .catch((error) => {
          this.$bvToast.toast(error.data.msg, {
            title: 'Error :',
            autoHideDelay: 1000,
            appendToast: true,
            variant: 'danger'
          })
        })
    }
  }
}
</script>
<style scoped>
.name-box {
  padding: 0 20px;
  position: relative;
  top: 20px;
}

.btn-save {
  background-color: #5e50a1;
  border-color: #5e50a1;
  color: white;
  margin: 0 auto;
  height: 45px;
}

.btn-save:hover {
  background-color: #fbb017;
  border-color: #fbb017;
  color: #111;
}

.btn-cancel {
  background-color: #5e50a1;
  border-color: #5e50a1;
  color: WHITE;
}

.btn-cancel:hover {
  background-color: #fbb017;
  border-color: #fbb017;
  color: #111;
}

/* ------------------------- */

.page-container {
  display: grid;
  margin: 70px auto;
  width: 85%;
  grid-template-columns: 1fr 1fr;
}

.magenta {
  width: 100%;
  /* position: absolute; */
  top: 0;
  left: 0;
  height: 350px;
  background-color: #5e50a1;
}

.profile-info {
  /*width: 400px;*/
  height: 450px;
  border-radius: 8px;
  background-color: white;
  position: relative;
  z-index: 1;
}

.image {
  width: 170px;
  margin: 20px auto 10px auto;
}

.hire-info {
  height: 920px;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  background-color: white;
  padding: 15px;
}

/* Skills */
.skills {
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  width: 300px;
}

.skill {
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid #fbb017;
  border-radius: 4px;
  text-align: center;
  padding: 3px 15px;
  color: #fbb017;
  margin: 0 5px 5px 0px;
}
</style>
