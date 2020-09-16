<template>
  <div>
    <b-col cols="12">
      <b-container class="nav-grid">
        <div>
          <img src="../assets/img/logo.png" alt />
        </div>
        <div class="button-after-login">
          <img style="width:25px;height:25px;" src="../assets/img/notif.png" alt />
          <img style="width:25px;height:25px;" src="../assets/img/mail.png" alt />
          <div class="user-img"></div>
        </div>
      </b-container>
    </b-col>
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
  background-color: #5e50a1;
}
</style>
