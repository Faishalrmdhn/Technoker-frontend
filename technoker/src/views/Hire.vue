<template>
  <div style="width:100%; background-color: #E5E5E5;">
    <Header
      class="py-4"
      style="background-color: white; box-shadow: 0px 10px 50px rgba(132, 132, 132, 0.25);"
    />
    <div class="page-container">
      <div class="profile-info">
        <div class="image">
          <img class="image" :src="port + data.user_image" alt />
        </div>
        <div style="padding:0 30px" class="mt-5">
          <h4>{{data.user_name}}</h4>
          <p>{{data.user_job_desk}}</p>
          <p>{{data.user_location}}</p>
          <p>{{data.user_about}}</p>
          <h4>Skill</h4>
          <div class="skills-grid">
            <div class="skills" v-for="(value, index) in data.skills" :key="index">
              <div class="skill">{{value.skill_name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="hire-info">
        <h2>Hubungi {{data.user_name}}</h2>
        <p>{{data.user_about}}</p>
        <div>
          <b-form v-if="show">
            <b-form-group id="input-group-2" label="Tuliskan pesan:" label-for="textarea">
              <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Jelaskan lebih detail"
                rows="10"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
            <b-button block class="mt-5 btn-hire">Hire</b-button>
          </b-form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/HeaderLogin'
import Footer from '../components/Footer'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        checked: []
      },
      show: true,
      port: 'http://127.0.0.1:4000/profile/'
    }
  },
  computed: {
    ...mapGetters({ data: 'user' })
  },
  components: {
    Header,
    Footer
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

.page-container {
  display: grid;
  margin: 70px auto;
  width: 85%;
  grid-template-columns: 1fr 1fr;
}

.profile-info {
  width: 400px;
  height: 700px;
  border-radius: 8px;
  background-color: white;
}

.image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  /* background: black; */
  margin: 30px auto;
}

.hire-info {
  width: 700px;
  height: 1000px;
  border-radius: 8px;
}
/* Skills */
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
  font-size: 12px;
  padding: 3px 15px;
  color: white;
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
    margin-bottom: -250px;
  }
}
</style>
