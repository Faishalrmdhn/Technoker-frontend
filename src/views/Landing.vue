<template>
  <div>
    <HeaderRegister />
    <b-container>
      <b-jumbotron class="mb-0 bg-white py-5">
        <b-row class="align-items-center">
          <b-col cols="12" xl="6">
            <h1 class="title-banner m-0">
              Talenta Terbaik Negeri Untuk Perubahan Revolusi 4.0
            </h1>
            <p class="my-4">
              Technoker merupakan suatu aplikasi penghubung antara pekerja dan
              perekrut maupun sebaliknya dalam bidang IT (Information &
              Technology). Aplikasi ini hadir sebagai jawaban atas kurangnya SDM
              berlatar belakang IT di Indonesia. Hadirnya aplikasi ini
              diharapkan akan membantu peningkatan SDM IT di Indonesia.
            </p>
            <router-link to="/login">
              <b-button class="py-2">Mulai</b-button>
            </router-link>
          </b-col>
          <b-col cols="12" xl="6" class="text-center">
            <img src="@/assets/img1.png" class="landing-img" />
          </b-col>
        </b-row>
      </b-jumbotron>
      <b-jumbotron class="mb-0 bg-white py-5">
        <b-row class="align-items-center">
          <b-col cols="12" xl="6" class="text-center">
            <img src="@/assets/img2.png" class="landing-img" />
          </b-col>
          <b-col cols="12" xl="6">
            <h2 class="mb-3">Kenapa Harus Mencari Tallent di Technoker ?</h2>
            <b-row>
              <b-col cols="1">
                <b-icon
                  icon="check-circle-fill"
                  class="h4 my-3 check1"
                ></b-icon>
              </b-col>
              <b-col cols="11" class="align-self-center"
                >JobPortal khusus untuk Pekerja atau Perekrut dalam Bidang
                IT</b-col
              >
              <b-col cols="1">
                <b-icon
                  icon="check-circle-fill"
                  class="h4 my-3 check1"
                ></b-icon>
              </b-col>
              <b-col cols="11" class="align-self-center"
                >Website yang mudah digunakan</b-col
              >
              <b-col cols="1">
                <b-icon
                  icon="check-circle-fill"
                  class="h4 my-3 check1"
                ></b-icon>
              </b-col>
              <b-col cols="11" class="align-self-center"
                >Pekerja yang terdaftar adalah Pekerja yang sudah teruji
                kualitasnya</b-col
              >
              <b-col cols="1">
                <b-icon
                  icon="check-circle-fill"
                  class="h4 my-3 check1"
                ></b-icon>
              </b-col>
              <b-col cols="11" class="align-self-center"
                >Perusahaan (perekrut) dari Perusahaan yang sudah Top
                International</b-col
              >
            </b-row>
          </b-col>
        </b-row>
      </b-jumbotron>
      <b-jumbotron class="mb-0 bg-white py-5">
        <b-row class="align-items-center">
          <b-col cols="12" xl="6" class="pl-5 pr-0">
            <h2 class="mb-3">Skill Tallent</h2>
            <p>
              Bahasa bahasa yang dikuasai oleh Pekerja yang terdaftar di
              Technoker
            </p>
            <b-row>
              <b-col cols="1">
                <b-icon
                  icon="check-circle-fill"
                  class="h4 my-3 check2"
                ></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">Java</b-col>
              <b-col cols="1">
                <b-icon
                  icon="check-circle-fill"
                  class="h4 my-3 check2"
                ></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">Golang</b-col>
              <b-col cols="1">
                <b-icon
                  icon="check-circle-fill"
                  class="h4 my-3 check2"
                ></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">Kotlin</b-col>
              <b-col cols="1">
                <b-icon
                  icon="check-circle-fill"
                  class="h4 my-3 check2"
                ></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">C++</b-col>
              <b-col cols="1">
                <b-icon
                  icon="check-circle-fill"
                  class="h4 my-3 check2"
                ></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">PHP</b-col>
              <b-col cols="1">
                <b-icon
                  icon="check-circle-fill"
                  class="h4 my-3 check2"
                ></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">Ruby</b-col>
              <b-col cols="1">
                <b-icon
                  icon="check-circle-fill"
                  class="h4 my-3 check2"
                ></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">Javascript</b-col>
              <b-col cols="1">
                <b-icon
                  icon="check-circle-fill"
                  class="h4 my-3 check2"
                ></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center"
                >10+ Bahasa lainnya</b-col
              >
            </b-row>
          </b-col>
          <b-col cols="12" xl="6" class="text-center">
            <img src="@/assets/img3.png" class="landing-img" />
          </b-col>
        </b-row>
      </b-jumbotron>
    </b-container>
    <b-jumbotron class="gray">
      <b-container>
        <div cols="12" class="text-center mb-4">
          <h2>Their Opinion About Technoker</h2>
        </div>
        <!-- CAROUSEL -->
        <b-carousel
          id="carousel-1"
          v-model="slide"
          controls
          indicators
          background="#e5e5e5"
          img-width="1024"
          img-height="480"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide img-blank>
            <b-row class="text-dark">
              <b-col cols="12" xl="4" class="text-center my-2">
                <b-card class="landing-card mx-auto" style="max-width: 19rem">
                  <b-avatar size="6rem" class="mb-1 opinion-people">
                    <img
                      src="@/assets/img/default.png"
                      style="width: 7.5rem"
                      class="mt-4"
                    />
                  </b-avatar>
                  <h4 class="mb-0">Muhammad Nur Hidayat</h4>
                  <small class="text-muted">Backend Developer</small>
                  <b-card-text class="mt-2 px-4"
                    >Selama ini kami sangat puas dengan pelayanan serta kandidat
                    yang telah melamar. Kami selalu mendapat respon kandidat
                    yang baik dari database yang Technoker miliki.</b-card-text
                  >
                </b-card>
              </b-col>
              <b-col cols="12" xl="4" class="text-center my-2">
                <b-card
                  class="landing-card border-light mx-auto"
                  style="max-width: 19rem"
                >
                  <b-avatar size="6rem" class="mb-1 opinion-people">
                    <img
                      src="@/assets/img/default.png"
                      style="width: 7.5rem"
                      class="mt-4"
                    />
                  </b-avatar>
                  <b-card-title class="mb-0">Muhammad Rinaldi</b-card-title>
                  <small class="text-muted">Fullstack Developer</small>
                  <b-card-text class="mt-2 px-4"
                    >Kami tim recruitmen sangat terbantu dengan adanya Website
                    seperti Technoker ini. Skill skill dan portofolio juga
                    ditampilkan sehingga memudahkan kita untuk
                    merekrut.</b-card-text
                  >
                </b-card>
              </b-col>
              <b-col cols="12" xl="4" class="text-center my-2">
                <b-card
                  class="landing-card border-light mx-auto"
                  style="max-width: 19rem"
                >
                  <b-avatar size="6rem" class="mb-1 opinion-people">
                    <img
                      src="@/assets/img/default.png"
                      style="width: 7.5rem"
                      class="mt-4"
                    />
                  </b-avatar>
                  <b-card-title class="mb-0">Muhammad Faishal</b-card-title>
                  <small class="text-muted">Frontend Developer</small>
                  <b-card-text class="mt-2 px-4"
                    >Menurut kami Technoker cukup baik, sangat kooperatif dan
                    cukup cepat dalam memberikan respon. selain itu Technoker
                    juga dapat mengikuti permintaan client yang
                    customized.</b-card-text
                  >
                </b-card>
              </b-col>
            </b-row>
          </b-carousel-slide>
        </b-carousel>
      </b-container>
    </b-jumbotron>
    <b-container>
      <b-jumbotron class="card-bottom my-5 px-5">
        <div>
          <h2 class="text-white m-0">
            <strong>Technoker</strong>
            <br />Easier and Quicker
          </h2>
        </div>
        <div class="align-self-center">
          <b-button href="#" class="bg-white py-2 px-3" style="color: #5e50a1"
            >Mulai</b-button
          >
        </div>
      </b-jumbotron>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import HeaderRegister from '@/components/HeaderRegister'
// import HeaderLogin from '@/components/HeaderLogin'
import Footer from '@/components/Footer'
// import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Landing',
  components: {
    HeaderRegister,
    // HeaderLogin,
    Footer
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  // created() {
  //   th
  // },
  // computed: {
  //   ...mapGetters({ user: 'getUser' })
  // },
  methods: {
    // ...mapActions(['getRecruiterById']),
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
.landing-img {
  width: 100%;
  height: 100%;
}
.title-banner {
  line-height: 55px;
}
.btn-secondary {
  background-color: #5e50a1;
}
.check1 {
  color: #5e50a1;
}
.check2 {
  color: #fbb017;
}
.opinion-people {
  border: 6px solid #f7d28a;
}
.landing-card {
  box-shadow: 0px 8px 16px rgba(197, 197, 197, 0.25);
}
.card-bottom {
  background-color: #5e50a1;
  border-radius: 40px 8px;
  display: flex;
  justify-content: space-between;
}
.gray {
  background-color: #e5e5e5;
}
</style>
