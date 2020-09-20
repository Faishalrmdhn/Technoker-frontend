<template>
  <div style="width: 100%">
    <b-container class="nav-grid py-2">
      <div>
        <img src="../assets/img/logo.png" alt />
      </div>
      <!-- <div>{{ user }}</div> -->
      <div class="button-after-login">
        <img
          style="width:25px;height:25px;"
          src="../assets/img/notif.png"
          alt
        />
        <img style="width:25px;height:25px;" src="../assets/img/mail.png" alt />
        <div v-if="user.role === 1" class="user-img " @click="homePage()">
          <!-- <route-link to="/home"> -->
          <img class="user-img" :src="port + user.user_image" alt="" />
          <!-- </route-link> -->
        </div>
        <div v-if="user.role === 2" class="user-img" @click="profilePage()">
          <!-- <route-link to="/profile"> -->
          <img class="user-img" :src="port + user.user_image" alt="" />
          <!-- </route-link> -->
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      port: 'http://127.0.0.1:4000/profile/'
    }
  },
  computed: {
    ...mapGetters({ user: 'getUser' })
  },
  methods: {
    homePage() {
      this.$router.push('/home')
    },
    profilePage() {
      this.$router.push('/profile')
    }
  }
}
</script>

<style scoped>
.nav-grid {
  display: flex;
  justify-content: space-between;
}

.button-after-login {
  display: flex;
  width: 200px;
  justify-content: space-evenly;
  margin: 0 5px;
}

.user-img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  /* background-color: #5e50a1; */
}

.user-img:hover {
  cursor: pointer;
}
</style>
