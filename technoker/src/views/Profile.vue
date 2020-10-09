<template>
  <div>
    <HeaderLogin style="padding: 20px 0" />
    <div class="purple">
      <b-container class="pt-5">
        <b-row class="card-profile pt-5 mx-auto">
          <b-col xl="4" cols="12" class="text-center mb-2">
            <b-card class="border-light">
              <b-avatar size="7rem" class="my-3">
                <img
                  v-if="data.user_image !== null"
                  :src="port + data.user_image"
                  style="width: 7rem"
                  class="mt-4"
                />
                <img
                  v-if="data.user_image === null"
                  src="../assets/img/default.png"
                  alt
                />
              </b-avatar>
              <div class="text-left">
                <b-card-title class="my-1">{{ data.user_name }}</b-card-title>
                <small>{{ data.user_job_desk }}</small>
                <p class="mt-3 text-muted">
                  <span>
                    <img src="../assets/img/location.png" alt />
                  </span>
                  {{ data.user_location }}
                </p>
                <small class="text-muted">{{ data.user_job_type }}</small>
                <b-card-text class="mt-2 text-muted">
                  {{ data.user_about }}
                </b-card-text>
              </div>
              <div class="my-5">
                <b-button
                  class="py-2 btn-hire-edit"
                  style="width: 100%"
                  v-show="showBtnEdit"
                  @click="editPage"
                  >Edit</b-button
                >

                <b-button
                  @click="redirectHire"
                  class="py-2 my-2 mb-2 btn-hire-edit"
                  v-show="showBtnHire"
                  style="width: 100%"
                  >Hire</b-button
                >

                <b-button
                  class="mt-2 btn-hire-edit"
                  style="width: 100%"
                  v-show="showBtnEdit"
                  @click="getLogout"
                  >Logout</b-button
                >
              </div>
              <h4 class="text-left my-3">Skill</h4>
              <div>
                <div class="skills-grid">
                  <div
                    class="skills"
                    v-for="(value, index) in data.skills"
                    :key="index"
                  >
                    <div class="skill">{{ value.skill_name }}</div>
                  </div>
                </div>
              </div>
              <div class="contact text-muted text-left mt-5">
                <p>
                  <span>
                    <img src="../assets/img/mail.png" alt />
                  </span>
                  {{ data.user_email }}
                </p>
                <p v-if="data.user_instagram !== null">
                  <span>
                    <img src="../assets/img/instagram.png" alt />
                  </span>
                  {{ data.user_instagram }}
                </p>
                <p v-if="data.user_github !== null">
                  <span>
                    <img src="../assets/img/github.png" alt />
                  </span>
                  {{ data.user_github }}
                </p>
              </div>
            </b-card>
          </b-col>
          <b-col xl="8" cols="12">
            <b-card class="border-light text-left ml-0">
              <b-tabs
                style="font-size: 20px"
                no-nav-style
                content-class="mt-3 ml-0"
                active-nav-item-class="font-weight-bold text-dark"
              >
                <b-tab
                  title="Portofolio"
                  class="p-3"
                  active
                  @click="getPorto()"
                >
                  <b-row>
                    <b-col
                      xl="4"
                      cols="6"
                      v-for="(value, index) in portfolio"
                      :key="index"
                    >
                      <b-img
                        fluid
                        :src="portfolioImg + value.portofolio_image"
                        alt="Image 1"
                      ></b-img>
                      <p class="text-center" style="font-size: 15px">
                        {{ value.portofolio_name }}
                      </p>
                    </b-col>
                  </b-row>
                </b-tab>

                <b-tab title="Pengalaman Pekerjaan" class="p-3">
                  <b-row v-for="(value, index) in experience" :key="index">
                    <b-col cols="2">
                      <b-img
                        fluid
                        :src="require('@/assets/tokped.jpg')"
                        alt="Image 1"
                      ></b-img>
                    </b-col>
                    <b-col cols="10">
                      <p class="my-0">
                        <strong>{{ value.experience_position }}</strong>
                      </p>
                      <p class="my-0">{{ value.experience_company }}</p>
                      <small class="text-muted">
                        {{ value.experience_date_in }} -
                        {{ value.experience_date_out }}
                      </small>
                      <br />
                      <br />
                      <p>{{ value.experience_desc }}</p>
                      <hr />
                    </b-col>
                  </b-row>
                </b-tab>
              </b-tabs>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="gray"></div>
  </div>
</template>

<script>
import HeaderLogin from '@/components/HeaderLogin.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Profile',
  components: {
    HeaderLogin
  },
  data() {
    return {
      showBtnEdit: false,
      showBtnHire: false,
      port: `${process.env.VUE_APP_URL}profile/`,
      portfolioImg: `${process.env.VUE_APP_URL}portofolio/`
    }
  },
  created() {
    this.showButton()
  },
  updated() {
    this.getUserById()
  },
  methods: {
    ...mapActions(['getUserById', 'logout']),
    ...mapMutations(['setUserById']),
    editPage() {
      this.$router.push('/edit-profile-c')
    },
    redirectHire() {
      this.$router.push('/hire')
    },
    showButton() {
      if (this.role.role === 2) {
        this.showBtnEdit = true
      } else {
        this.showBtnEdit = false
      }
      if (this.role.role === 1) {
        this.showBtnHire = true
      } else {
        this.showBtnHire = false
      }
    },
    getLogout() {
      this.logout()
    },
    getPorto() {
      console.log(this.getUserById)
    }
  },
  computed: {
    ...mapGetters({
      data: 'user',
      portfolio: 'portfolio',
      experience: 'experience',
      role: 'getUser'
    })
  }
}
</script>

<style scoped>
.purple {
  height: 361px;
  background-color: #5e50a1;
}
.gray {
  height: auto;
  background-color: #e5e5ee;
}

.btn-hire-edit {
  background-color: #5e50a1;
  border-color: #5e50a1;
}
.btn-hire-edit:hover {
  background-color: #fbb017;
  border-color: #fbb017;
}

.portofolio {
  display: flex;
  justify-content: space-between;
}
.skills-grid {
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
  padding: 3px 0;
  color: #ffff;
  margin: 0 5px 5px 0px;
  font-size: 12px;
}
</style>
