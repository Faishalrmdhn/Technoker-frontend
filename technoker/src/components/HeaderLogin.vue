<template>
  <div style="width: 100%">
    <b-container class="nav-grid py-2">
      <div>
        <img
          src="../assets/img/technoker.png"
          style="width: 100px; height: 40px"
          alt
        />
      </div>
      <!-- <div>{{ user }}</div> -->
      <div class="button-after-login">
        <router-link style="cursor:pointer" to="#" id="notif-bar" @click="notifClick">
          <img style="width:25px;height:25px;" src="../assets/img/notif.png" alt @click="notifClick" />
          <div class="notif-count" v-if="notifCount > 0"></div>
        </router-link>
        <b-popover target="notif-bar" triggers="focus" placement="placement">
          <div class="notif-empty" v-if="notifList.length < 1">
            <div class="notif-empty-img">
              <img src="../assets/notify.png" alt="">
            </div>
            <div class="text">
              <span class="text-secondary">Belum ada notifikasi</span>
            </div>
          </div>
          <div class="notif-collection">
            <div class="notif-item" v-for="(v, i) in notifList" :key="i">
              <span>{{ v.notif_subject }}</span>
            </div>
          </div>
        </b-popover>
        <router-link style="cursor:pointer" to="/chat">
          <img style="width:25px;height:25px;" src="../assets/img/mail.png" alt />
        </router-link>
        <div v-if="user.role === 1" class="user-img" @click="homePage()">
          <!-- <route-link to="/home"> -->
          <img v-if="recruiter.recruiter_profile_image !== null" class="user-img" :src="port + recruiter.recruiter_profile_image" alt />
          <img v-if="recruiter.recruiter_profile_image === null" class="user-img" src="../assets/img/default.png" alt />
          <!-- </route-link> -->
        </div>
        <div v-if="user.role === 2" class="user-img" @click="profilePage()">
          <!-- <route-link to="/profile"> -->
          <img
            v-if="user.user_image !== null"
            class="user-img"
            :src="port + user.user_image"
            alt
          />
          <img
            v-if="user.user_image === null"
            class="user-img"
            src="../assets/img/default.png"
            alt
          />
          <!-- </route-link> -->
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      notifData: [1, 2, 3, 4, 5],
      port: 'http://127.0.0.1:4000/profile/'
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      recruiter: 'recruiter',
      notifList: 'getNotifList',
      notifCount: 'getNotifCount'
    })
  },
  created() {
    const userData = {
      role: this.user.role,
      user_id: this.user.role === 1 ? this.user.recruiter_id : this.user.user_id
    }
    this.getCountNotif(userData)
  },
  methods: {
    ...mapActions(['getNotificationByUser', 'getCountNotif']),
    ...mapMutations(['setNotifCount']),
    homePage() {
      this.$router.push('/profile-company')
    },
    profilePage() {
      this.$router.push('/profile')
    },
    notifClick() {
      const userData = {
        role: this.user.role,
        user_id: this.user.role === 1 ? this.user.recruiter_id : this.user.user_id
      }
      this.getNotificationByUser(userData)
      this.setNotifCount(0)
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
  margin-top: -1.5px;
  border-radius: 50%;
  cursor: pointer;
  /* background-color: #5e50a1; */
}

.user-img:hover {
  cursor: pointer;
}

.notif-empty {
  padding: 40px 20px;
}

.notif-empty img {
  width: 150px;
}

.notif-collection .notif-item {
  padding: 20px;
  border-bottom: 1px solid #efefef;
}

.notif-collection .notif-item:hover {
  background: #efefef
}

.notif-count {
  width: 8px;
  height: 8px;
  border-radius: 10px;
  background: red;
  position: relative;
  left: 8.6px;
  top: 0px;
}

</style>
