<template>
  <div style="background-color: #e5e5e5">
    <header class="header-mobile">
      <div class="header-m-t">
        <h5>Mon, 20 Mei 2020</h5>
        <h2>Hi!, Naldi</h2>
      </div>
      <img src="../assets/img/notif.png" alt />
    </header>
    <Header class="py-3" style="background-color: white" />
    <TopJobs />
    <b-container>
      <form @submit.prevent="onSearch" class="form pt-3 my-5">
        <div class="search-name">
          <b-form-input
            id="input-1"
            v-model="search"
            placeholder="Search name"
          ></b-form-input>
        </div>
        <div class="img-search">
          <img src="../assets/img/search.png" alt />
        </div>
        <div class="slash"></div>
        <div class="form-sort">
          <b-form-group id="input-group-3">
            <b-form-select
              v-model="selected"
              :options="options"
              @change="sort"
            ></b-form-select>
          </b-form-group>
        </div>
        <div>
          <b-button class="btn-search" @click="onSearch">Search</b-button>
        </div>
      </form>
    </b-container>
    <b-container>
      <div class="worker mt-5">
        <div v-for="(value, index) in users" :key="index" class="workers">
          <div class="profile">
            <div v-if="value.user_image === null">
              <img class="profile-img" src="../assets/img/default.png" alt />
            </div>
            <div v-if="value.user_image !== null">
              <img class="profile-img" :src="port + value.user_image" alt />
            </div>
            <div class="profile-details">
              <h4 @click="getUserId(value.user_id)" style="cursor: pointer">
                {{ value.user_name }}
              </h4>
              <p style="color: #9ea0a5">{{ value.user_job_desk }}</p>
              <p style="color: #9ea0a5; margin-top: -10px">
                {{ value.user_location }}
              </p>
              <p style="color: #9ea0a5; margin-top: -10px">
                {{ value.user_job_type }}
              </p>
              <div class="skills-grid">
                <div
                  class="skills"
                  v-for="(value, index) in value.skills"
                  :key="index"
                >
                  <div class="skill">{{ value.skill_name }}</div>
                </div>
              </div>
            </div>
          </div>
          <div style="position: relative">
            <b-button class="btn-profile" @click="getUserId(value.user_id)"
              >See Profile</b-button
            >
          </div>
          <hr style="color: #9ea0a5" />
        </div>
      </div>
    </b-container>
    <div class="my-5">
      <b-pagination
        class="pagination-btn"
        align="center"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="limit"
        @change="pageChange"
      ></b-pagination>
    </div>
    <b-container></b-container>
    <Footer />
    <footer class="footer-nav">
      <div class="navs">
        <img src="../assets/img/mail.png" alt />
      </div>
      <div class="navs">
        <img src="../assets/img/search.png" alt />
      </div>
      <div class="navs">
        <img src="../assets/img/notif.png" alt />
      </div>
      <div class="navs">
        <img src="../assets/img/mail.png" alt />
      </div>
    </footer>
  </div>
</template>

<script>
import Header from '../components/HeaderLogin.vue'
import TopJobs from '../components/HeaderTopJobs.vue'
import Footer from '../components/Footer'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    Header,
    TopJobs,
    Footer
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'SORT' },
        { value: 'user_name ASC', text: 'Name' },
        { value: 'user_skill DESC', text: 'Skill' },
        { value: 'freelance', text: 'Freelance' },
        { value: 'fulltime', text: 'Fulltime' }
      ],
      show: true,
      currentPage: 1,
      getText: '',
      search: '',
      limit: 3,
      workerId: '',
      port: `${process.env.VUE_APP_URL}profile/`
    }
  },
  created() {
    this.getAllUser()
  },
  methods: {
    sort() {
      this.setSort(this.selected)
      this.getAllUser()
    },
    ...mapActions(['getAllUser', 'searchUser', 'getUserById']),
    ...mapMutations(['setPagination', 'setSearch', 'setSort']),
    pageChange(event) {
      this.setPagination(event)
      this.getAllUser()
    },
    onSearch() {
      this.getText = this.search
      this.setSearch(this.getText)
      this.searchUser()
    },
    getUserId(data) {
      // this.workerId = data
      this.getUserById(data)
      this.$router.push('/profile')
    }
  },
  computed: {
    ...mapGetters({ users: 'allUsers', rows: 'totalData' })
  }
}
</script>

<style scoped>
.form {
  display: flex;
  box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
}

.container {
  background: #ffffff;
  box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
  border-radius: 8px;
}

.search-name {
  width: 800px;
  color: #9ea0a5;
}

.search-name input {
  border-color: white;
}

.img-search {
  margin: 5px 10px 0 10px;
}

.slash {
  width: 1px;
  background-color: #9ea0a5;
  margin-top: -12px;
}

.form-sort {
  width: 200px;
}

.form-sort select {
  color: #9ea0a5;
  border-color: white;
}

.btn-search {
  background-color: #5e50a1;
  border-radius: 4px;
  width: 121px;
}
.btn-search:hover {
  background-color: #fbb017;
  border-color: #fbb017;
}
.btn-profile {
  background-color: #5e50a1;
  border-radius: 4px;
  width: 120px;
  height: 40px;
  position: absolute;
  top: 100px;
  right: 40px;
}
.btn-profile:hover {
  background-color: #fbb017;
  border-color: #fbb017;
}

.worker {
  max-width: 100%;
}

/* WORKERS */
.workers {
  width: 100%;
  height: 250px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
}

.profile {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.profile-img {
  width: 130px;
  height: 130px;
  margin: 60px 40px;
  border-radius: 50%;
  /* background-color: #000; */
}

.profile-details {
  margin: 30px 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* margin-right: 0 5px 10px 5px; */
  width: 310px;
  font-size: 12px;
}

.skill {
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid #fbb017;
  border-radius: 4px;
  text-align: center;
  padding: 3px 15px;
  color: white;
  margin: 0 5px 5px 0px;
}

.header-mobile {
  width: 100%;
  height: 174px;
  background-color: #5e50a1;
  border-radius: 0px 0px 20px 0px;
  position: relative;
  display: none;
}

.header-mobile img {
  position: absolute;
  width: 25px;
  height: 23px;
  right: 20px;
  top: 72px;
}

.header-m-t {
  position: absolute;
  left: 20px;
  top: 72px;
  color: #ffffff;
}

.footer-nav {
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px -6px 20px rgba(175, 175, 175, 0.25);
  border-radius: 30px 30px 0px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  display: none;
}

.navs {
  position: relative;
}

.navs img {
  position: absolute;
  top: 30px;
  left: 41px;
}
@media (max-width: 700px) {
  /* .footer-nav {
    display: grid;
  } */

  /* .header-mobile {
    display: block;
  } */
  .btn-profile {
    display: none;
  }
  .container {
    width: 375px;
  }
  .profile {
    width: 375px;
    grid-template-columns: 1fr;
    height: 400px;
  }

  .profile-details {
    margin-top: -140px;
  }
  .profile-img {
    display: none;
  }

  .form {
    display: none;
  }
}
</style>
