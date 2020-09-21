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
          <img class="image" :src="port + recruiter.recruiter_profile_image" alt />
        </div>
        <div style="padding:0 30px">
          <h4>{{recruiter.recruiter_company}}</h4>
          <p>{{recruiter.recruiter_position}}</p>
          <p>{{recruiter.recruiter_location}}</p>
        </div>
        <!-- <b-button block class="mt-4 btn-save">Simpan</b-button> -->
        <router-link to="/profile-company">
          <b-button block class="mt-3 btn-cancel">Batal</b-button>
        </router-link>
      </div>
      <div class="hire-info">
        <h3>Data diri</h3>
        <hr />
        <div>
          <b-form @submit.prevent="onUpdate">
            <b-form-group id="input-group-2" label="Nama Perusahaan" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.recruiter_company"
                required
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
            <b-form-group id="input-group-2" label="Bidang" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.recruiter_field"
                required
                placeholder="Masukkan nama bidang perusahaan ex: Financial"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Kota" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.recruiter_location"
                required
                placeholder="Masukkan kota"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Deskripsi:" label-for="textarea">
              <b-form-textarea
                id="textarea"
                v-model="form.recruiter_about"
                placeholder="Jelaskan lebih detail"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
            <!-- <b-form-group id="input-group-1" label="Email" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.recruiter_email"
                type="email"
                required
                placeholder="Masukkan email"
              ></b-form-input>
            </b-form-group>-->
            <b-form-group id="input-group-2" label="Instagram" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.recruiter_instagram"
                required
                placeholder="Masukkan nama instagram"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Nomor Telepon" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.recruiter_phone"
                required
                placeholder="Masukkan no telepon"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="LinkedIn" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.recruiter_linkedin"
                required
                placeholder="Masukkan LinkedIn"
              ></b-form-input>
            </b-form-group>
            <b-button block class="mt-4 btn-save" type="submit">Simpan</b-button>
          </b-form>
        </div>
      </div>
    </div>
    <Footer style="position: relative; z-index:0" />
  </div>
</template>

<script>
import Header from '../components/HeaderLogin'
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
      port: 'http://127.0.0.1:4000/profile/'
    }
  },
  components: {
    Header,
    Footer
  },
  created() {},
  computed: {
    ...mapGetters(['recruiter'])
  },
  methods: {
    handleFile(event) {
      this.form.recruiter_profile_image = event.target.files[0]
    },
    ...mapActions(['getRecruiterById', 'patchRecruiter']),
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
      console.log(data)
      const setData = {
        recruiter_id: this.recruiter.recruiter_id,
        FormData: data
      }
      this.patchRecruiter(setData)
        .then((result) => this.$router.push('/profile-company'))
        .catch((error) => error)
    }
  }
}
</script>

<style scoped>
.btn-hire {
  background-color: #fbb017;
  border-color: #fbb017;
}
.btn-hire:hover {
  background-color: #fbb017;
  border-color: #fbb017;
  color: #111;
}
.btn-save {
  background-color: #5e50a1;
  border-color: #5e50a1;
  color: white;
  margin: 0 auto;
  width: 357px;
  height: 50px;
}
.btn-save:hover {
  background-color: #fbb017;
  border-color: #fbb017;
  color: #111;
}
.btn-cancel {
  background-color: white;
  border-color: #5e50a1;
  color: #5e50a1;
  margin: 0 20px;
  width: 357px;
  height: 50px;
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
  position: absolute;
  top: 0;
  left: 0;
  height: 250px;
  background-color: #5e50a1;
}

.profile-info {
  width: 400px;
  height: 480px;
  border-radius: 8px;
  background-color: white;
  position: relative;
  z-index: 1;
}

.image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 30px auto;
}

.hire-info {
  width: 700px;
  height: 1000px;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  background-color: white;
  padding: 10px;
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

@media (max-width: 700px) {
  .page-container {
    grid-template-columns: 1fr;
  }

  .profile-info {
    width: 375px;
  }

  .hire-info {
    margin-top: 50px;
    width: 375px;
    margin-bottom: -20px;
  }

  .btn-save,
  .btn-cancel {
    width: 335px;
    height: 40px;
  }
}
</style>
