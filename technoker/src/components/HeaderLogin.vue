<template>
  <div style="width: 100%">
    <b-container class="nav-grid py-2">
      <div>
        <img src="../assets/img/logo.png" alt />
      </div>
      <div class="button-after-login">
        <img
          style="width:25px;height:25px;"
          src="../assets/img/notif.png"
          alt
        />
        <img style="width:25px;height:25px;" src="../assets/img/mail.png" alt />
        <div class="user-img"><img :src="port + user.user_image" alt="" /></div>
        <!-- // {{ user.user_image }} -->
        <div>{{ user }}</div>
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
    ...mapGetters({ user: 'user' })
  },
  methods: {}
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
  background-color: #5e50a1;
}
</style>
