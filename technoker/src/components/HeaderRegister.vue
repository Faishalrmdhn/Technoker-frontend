<template>
  <div>
    <b-col cols="12">
      <b-container class="nav-grid">
        <div>
          <img src="../assets/img/logo.png" alt />
        </div>
        <div class="button-login-register">
          <b-button class="login-btn">Login</b-button>
          <b-button class="register-btn">Register</b-button>
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

.button-login-register {
  display: flex;
  width: 200px;
  justify-content: space-evenly;
}

.login-btn {
  background-color: white;
  color: #5e50a1;
  border-color: #5e50a1;
}

.register-btn {
  background-color: #5e50a1;
  border-radius: 4px;
}

.login-btn:hover {
  background-color: #fbb017;
  border-color: #fbb017;
}

.register-btn:hover {
  background-color: #fbb017;
  border-color: #fbb017;
}
</style>
