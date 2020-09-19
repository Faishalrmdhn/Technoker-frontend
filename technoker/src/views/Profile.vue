<template>
  <div>
    <HeaderLogin style="padding:20px 0" />
    <div class="purple">
      <b-container class="pt-5">
        <b-row class="card-profile pt-5 mx-auto">
          <b-col xl="4" cols="12" class="text-center mb-2">
            <b-card class="border-light">
              <b-avatar size="7rem" class="my-3">
                <img
                  :src="port + data.user_image"
                  style="width: 7rem"
                  class="mt-4"
                />
              </b-avatar>
              <div class="text-left">
                <b-card-title class="my-1">{{ data.user_name }}</b-card-title>
                <small>{{ data.user_job_desk }}</small>
                <p class="mt-4 text-muted">{{ data.user_location }}</p>
                <small class="text-muted">{{ data.user_job_type }}</small>
                <b-card-text class="mt-2 text-muted">{{
                  data.user_about
                }}</b-card-text>
              </div>
              <div class="my-5">
                <b-button
                  class="py-2 btn-hire-edit"
                  style="width: 100%"
                  v-show="true"
                  @click="editPage"
                  >Edit</b-button
                >
                <b-button
                  class="py-2 btn-hire-edit"
                  v-show="true"
                  style="width: 100%"
                  >Hire</b-button
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
                <p>{{ data.user_email }}</p>
                <p>{{ data.user_instagram }}</p>
                <p>@{{ data.user_github }}</p>
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
                <b-tab title="Portofolio" class="p-3" active>
                  <b-row>
                    <b-col xl="4" cols="6">
                      <b-img
                        fluid
                        :src="require('@/assets/porto1.jpg')"
                        alt="Image 1"
                      ></b-img>
                      <p class="text-center" style="font-size:15px">
                        Reminder App
                      </p>
                    </b-col>
                    <b-col xl="4" cols="6">
                      <b-img
                        fluid
                        :src="require('@/assets/porto2.png')"
                        alt="Image 1"
                      ></b-img>
                      <p class="text-center" style="font-size:15px">
                        Social Media App
                      </p>
                    </b-col>
                    <b-col xl="4" cols="6">
                      <b-img
                        fluid
                        :src="require('@/assets/porto3.jpg')"
                        alt="Image 1"
                      ></b-img>
                      <p class="text-center" style="font-size:15px">
                        Project Management App
                      </p>
                    </b-col>
                    <b-col xl="4" cols="6">
                      <b-img
                        fluid
                        :src="require('@/assets/porto4.jpg')"
                        alt="Image 1"
                      ></b-img>
                      <p class="text-center" style="font-size:15px">
                        Reminder App
                      </p>
                    </b-col>
                    <b-col xl="4" cols="6">
                      <b-img
                        fluid
                        :src="require('@/assets/porto5.png')"
                        alt="Image 1"
                      ></b-img>
                      <p class="text-center" style="font-size:15px">
                        Social Media App
                      </p>
                    </b-col>
                    <b-col xl="4" cols="6">
                      <b-img
                        fluid
                        :src="require('@/assets/porto6.png')"
                        alt="Image 1"
                      ></b-img>
                      <p class="text-center" style="font-size:15px">
                        Project Management App
                      </p>
                    </b-col>
                  </b-row>
                </b-tab>

                <b-tab title="Pengalaman Pekerjaan" class="p-3">
                  <b-row>
                    <b-col cols="2">
                      <b-img
                        fluid
                        :src="require('@/assets/tokped.jpg')"
                        alt="Image 1"
                      ></b-img>
                    </b-col>
                    <b-col cols="10">
                      <p class="my-0">
                        <strong>Enginerr</strong>
                      </p>
                      <p class="my-0">Tokopedia</p>
                      <small class="text-muted"
                        >July 2019 - January 2020 6 months</small
                      >
                      <br />
                      <br />
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Reprehenderit quos qui nam, corrupti adipisci
                        facere veritatis amet possimus explicabo magnam optio
                        distinctio, officiis minus blanditiis.
                      </p>
                      <hr />
                    </b-col>
                    <b-col cols="2">
                      <b-img
                        fluid
                        :src="require('@/assets/tokped.jpg')"
                        alt="Image 1"
                      ></b-img>
                    </b-col>
                    <b-col cols="10">
                      <p class="my-0">
                        <strong>Enginerr</strong>
                      </p>
                      <p class="my-0">Tokopedia</p>
                      <small class="text-muted"
                        >July 2019 - January 2020 6 months</small
                      >
                      <br />
                      <br />
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Reprehenderit quos qui nam, corrupti adipisci
                        facere veritatis amet possimus explicabo magnam optio
                        distinctio, officiis minus blanditiis.
                      </p>
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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Profile',
  components: {
    HeaderLogin
  },
  data() {
    return {
      showBtnEdit: false,
      showBtnHire: false,
      port: 'http://127.0.0.1:4000/profile/'
    }
  },
  created() {
    this.showButton()
  },
  methods: {
    ...mapActions(['getUserById']),
    editPage() {
      this.$router.push('/edit-profile-c')
    },
    showButton() {
      console.log(this.data.role)
      if (this.data.role === 2) {
        this.showBtnEdit = true
      } else {
        this.showBtnEdit = false
      }

      if (this.data.role === 1) {
        this.showBtnHire = true
      } else {
        this.showBtnHire = false
      }
    }
  },
  computed: {
    ...mapGetters({ data: 'user' })
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
}
</style>
