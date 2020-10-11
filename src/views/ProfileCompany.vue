<template>
  <div>
    <HeaderLogin style="padding: 20px 0" />
    <div style="background-color: #e5e5e5">
      <b-jumbotron class="mb-0">
        <b-container>
          <div class="purple" style="position: relative">
            <!-- <h5
              style="position: absolute; bottom: 0; right: 0"
              class="mr-3 text-white"
            >
              Ubah Latar
            </h5> -->
          </div>
          <div class="white text-center mx-auto" style="padding-bottom: -100px">
            <div
              class="mx-auto pb-3"
              style="position: relative; top: -117px; width: 60%"
            >
              <b-avatar size="12rem" class="my-3">
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
              <div>
                <h3 class="my-1">{{ recruiter.recruiter_company }}</h3>
                <p>{{ recruiter.recruiter_field }}</p>
                <p v-if="recruiter.recruiter_location" class="mt-3 text-muted">
                  <b-icon icon="geo-alt" variant="secondary"></b-icon>
                  {{ recruiter.recruiter_location }}
                </p>
                <b-card-text class="mt-2 text-muted">{{
                  recruiter.recruiter_about
                }}</b-card-text>
              </div>
              <b-button
                class="py-2 my-4 btn-hire-edit"
                style="width: 30%; background-color: #5e50a1"
                @click="editDataCompany"
              >
                Edit Profile
              </b-button>
              <br />

              <div
                class="text-center mx-auto"
                style="width: 200px; margin-bottom: -100px"
              >
                <div>
                  <b-row class="text-left">
                    <b-col cols="2" class="mb-3">
                      <img src="../assets/email.png" alt="" />
                    </b-col>
                    <b-col cols="10">{{ recruiter.recruiter_email }}</b-col>
                    <b-col cols="2" class="mb-3">
                      <img v-if="recruiter.recruiter_instagram" src="../assets/ig.png" alt="" />
                    </b-col>
                    <b-col cols="10">{{ recruiter.recruiter_instagram }}</b-col>

                    <b-col cols="2" class="mb-3">
                      <img src="../assets/phone.png" alt="" />
                    </b-col>
                    <b-col cols="10">{{ recruiter.recruiter_phone }}</b-col>

                    <b-col cols="2" class="mb-3">
                      <img v-if="recruiter.recruiter_linkedin" src="../assets/in.png" alt="" />
                    </b-col>
                    <b-col cols="10">{{ recruiter.recruiter_linkedin }}</b-col>
                  </b-row>
                </div>
              </div>
            </div>
          </div>
        </b-container>
      </b-jumbotron>
    </div>
    <Footer class="mt-0" />
  </div>
</template>
<script>
import HeaderLogin from '@/components/HeaderLogin.vue'
import Footer from '@/components/Footer.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProfileCompany',
  data() {
    return {
      port: `${process.env.VUE_APP_URL}profile/`
    }
  },
  components: {
    HeaderLogin,
    Footer
  },
  created() {
    this.getRecruiterById(this.recruiter.recruiter_id)
  },
  computed: {
    ...mapGetters({ user: 'getUser', recruiter: 'recruiter' })
  },
  methods: {
    ...mapActions(['getRecruiterById', 'logout']),
    editDataCompany() {
      this.$router.push('/edit-profile-r')
    },
    isLogout() {
      this.$bvModal
        .msgBoxConfirm('logout account?', {
          cancelVariant: 'danger',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
        .then((value) => {
          this.isLogout = value
          this.isLogout ? this.logout() : console.log(value)
        })
    },
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.purple {
  height: 200px;
  background-color: #5e50a1;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

.white {
  background-color: #ffff;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}

.user-img {
  width: 100%;
  position: relative;
  top: -11px;
  border-radius: 50%;
  cursor: pointer;
}

.user-img:hover {
  cursor: pointer;
}
</style>
