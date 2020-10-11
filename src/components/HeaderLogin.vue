<template>
  <div style="width: 100%">
    <b-container class="nav-grid py-2">
      <div
        v-if="user.role === 1"
        @click="$router.push('/home')"
        style="cursor: pointer"
      >
        <img src="../assets/technoker1.png" alt />
      </div>
      <div
        v-if="user.role === 2"
        @click="$router.push('/profile')"
        style="cursor: pointer"
      >
        <img src="../assets/technoker1.png" alt />
      </div>
      <!-- <div>{{ user }}</div> -->
      <div class="button-after-login">
        <router-link
          style="cursor: pointer"
          to="#"
          id="notif-bar"
          @click="notifClick"
        >
          <img
            style="width: 25px; height: 25px"
            src="../assets/img/notif.png"
            alt
            @click="notifClick"
          />
          <div class="notif-count" v-if="notifCount > 0"></div>
        </router-link>
        <b-popover target="notif-bar" triggers="focus" placement="placement">
          <div class="notif-empty" v-if="notifList.length < 1">
            <div class="notif-empty-img">
              <img src="../assets/notify.png" alt="" />
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
        <router-link style="cursor: pointer" to="/chat">
          <img
            style="width: 25px; height: 25px"
            src="../assets/img/mail.png"
            alt
          />
        </router-link>
        <div v-if="user.role === 1" class="user-img">
          <b-avatar
            v-if="recruiter.recruiter_profile_image !== null"
            :src="port + recruiter.recruiter_profile_image"
            size="1.6rem"
            id="popover-profile-company"
          ></b-avatar>
          <b-avatar
            v-if="recruiter.recruiter_profile_image === null"
            src="../assets/img/default.png"
            size="1.6rem"
            id="popover-profile-company"
          ></b-avatar>
          <b-popover
            target="popover-profile-company"
            triggers="click hover"
            placement="bottom"
          >
            <router-link to="/profile-company">
              <b-row class="my-2 py-2">
                <b-col cols="3" class="text-center"
                  ><b-icon icon="person-circle" aria-hidden="true"></b-icon
                ></b-col>
                <b-col cols="9" class="pl-0">Profile Page</b-col>
              </b-row>
            </router-link>
            <b-link>
              <b-row class="my-2 py-2" @click="isLogout">
                <b-col cols="3" class="text-center"
                  ><b-icon icon="power" aria-hidden="true"></b-icon
                ></b-col>
                <b-col cols="9" class="pl-0"> Logout </b-col>
              </b-row>
            </b-link>
          </b-popover>
        </div>
        <div v-if="user.role === 2" class="user-img">
          <b-avatar
            v-if="user.user_image !== null"
            :src="port + user.user_image"
            size="1.6rem"
            id="popover-profile-candidate"
          ></b-avatar>
          <b-avatar
            v-if="user.user_image === null"
            src="../assets/img/default.png"
            size="1.6rem"
            id="popover-profile-candidate"
          ></b-avatar>
          <b-popover
            target="popover-profile-candidate"
            triggers="click hover"
            placement="bottom"
          >
            <router-link to="/profile-company">
              <b-row class="my-2 py-2">
                <b-col cols="3" class="text-center"
                  ><b-icon icon="person-circle" aria-hidden="true"></b-icon
                ></b-col>
                <b-col cols="9" class="pl-0">Profile Page</b-col>
              </b-row>
            </router-link>
            <b-link>
              <b-row class="my-2 py-2" @click="isLogout">
                <b-col cols="3" class="text-center"
                  ><b-icon icon="power" aria-hidden="true"></b-icon
                ></b-col>
                <b-col cols="9" class="pl-0"> Logout </b-col>
              </b-row>
            </b-link>
          </b-popover>
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
      port: `${process.env.VUE_APP_URL}profile/`
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
    ...mapActions(['getNotificationByUser', 'getCountNotif', 'logout']),
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
        user_id:
          this.user.role === 1 ? this.user.recruiter_id : this.user.user_id
      }
      this.getNotificationByUser(userData)
      this.setNotifCount(0)
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
  background: #efefef;
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
