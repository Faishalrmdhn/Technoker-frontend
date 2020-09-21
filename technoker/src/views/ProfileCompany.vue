<template>
  <div>
    <HeaderLogin style="padding: 20px 0" />
    <div style="background-color: #e5e5e5">
      <b-jumbotron class="mb-0">
        <b-container>
          <div class="purple" style="position: relative;">
            <h5 style="position: absolute; bottom: 0; right: 0" class="mr-3 text-white">Ubah Latar</h5>
          </div>
          <div class="white text-center mx-auto" style="padding-bottom: -100px">
            <div class="mx-auto pb-3" style="position: relative; top: -110px; width: 50%">
              <b-avatar size="11rem" class="my-3">
                <b-img
                  center
                  v-if="recruiter.recruiter_profile_image !== null"
                  fluid
                  :src="port + recruiter.recruiter_profile_image"
                  alt="Image 1"
                  class="mt-4"
                ></b-img>
                <b-img
                  center
                  v-if="recruiter.recruiter_profile_image === null"
                  fluid
                  src="../assets/img/default.png"
                  alt="Image 1"
                  class="mt-4"
                ></b-img>
              </b-avatar>
              <div>
                <h3 class="my-1">{{recruiter.recruiter_company}}</h3>
                <p>{{recruiter.recruiter_field}}</p>
                <p class="mt-3 text-muted">{{recruiter.recruiter_location}}</p>
                <b-card-text class="mt-2 text-muted">{{recruiter.recruiter_about}}</b-card-text>
              </div>
              <b-button
                class="py-2 my-3 btn-hire-edit"
                style="width: 50%; background-color: #5e50a1"
                @click="editDataCompany()"
              >Edit</b-button>
              <br />
              <router-link to="home">
                <b-button
                  class="py-2 btn-hire-edit"
                  style="width: 50%; background-color: #5e50a1"
                >Back</b-button>
              </router-link>

              <div
                class="text-muted text-left mt-3 mx-auto"
                style="width: 40%; margin-bottom: -100px"
              >
                <p>Email : {{recruiter.recruiter_email}}</p>
                <p>Instagram : {{recruiter.recruiter_instagram}}</p>
                <p>LinkedIn : {{recruiter.recruiter_linkedin}}</p>
              </div>
            </div>
            <b-button
              class="py-2 my-4 btn-hire-edit"
              style="width: 10%; background-color: #5e50a1"
              @click="logout"
            >Logout</b-button>
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
      port: 'http://127.0.0.1:4000/profile/'
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
    ...mapGetters(['recruiter', 'getUser'])
  },
  methods: {
    ...mapActions(['getRecruiterById']),
    ...mapActions({ handleLogout: 'logout' }),
    editDataCompany() {
      this.$router.push('/edit-profile-r')
    },
    logout() {
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
          this.isLogout ? this.handleLogout() : console.log(value)
        })
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
</style>
