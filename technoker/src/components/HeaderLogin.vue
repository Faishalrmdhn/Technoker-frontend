<template>
  <div style="width: 100%">
    <b-container class="nav-grid py-2">
      <div>
        <img src="../assets/img/logo.png" alt />
      </div>
      <div class="button-after-login">
        <!-- NOTIFY -->
        <a id="notify" tabindex="0">
          <img style="width:25px;height:25px;" src="../assets/img/notif.png" alt />
        </a>
        <b-popover placement="bottom" target="notify" triggers="focus">
          <b-img fluid :src="require('@/assets/notify.png')" alt="Image 1" class="px-5 pt-5"></b-img>
          <p class="text-center pb-5" style="font-size:15px">No New Notification</p>
        </b-popover>
        <!-- INBOX -->
        <a id="inbox" tabindex="0">
          <img style="width:25px;height:25px;" src="../assets/img/mail.png" alt />
        </a>
        <b-popover placement="bottom" target="inbox" triggers="focus">
          <b-img fluid :src="require('@/assets/inbox.png')" alt="Image 1" class="px-5 pt-5"></b-img>
          <p class="text-center pb-5" style="font-size:15px">No New Inbox</p>
        </b-popover>
        <div class="user-img">
          <b-img fluid :src="require('@/assets/inbox.png')" alt="Image 1" class></b-img>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  computed: {}
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
}
</style>
