<template>
  <b-container class="nav-grid py-4">
    <div>
<<<<<<< HEAD
      <img style="width:100px; height:40px" src="../assets/img/technoker.png" alt />
=======
      <img src="../assets/img/technoker.png" style="width:100px; height: 40px" alt />
>>>>>>> 7d7de540cb4f40a351d5ae1f4255e282069c4e9a
    </div>
    <div class="button-login-register text-right">
      <router-link to="/login">
        <b-button class="login-btn mx-4">Login</b-button>
      </router-link>

      <b-button class="register-btn" @click="$bvModal.show('modalRegister')">Register</b-button>
      <b-modal id="modalRegister" hide-footer hide-header>
        <template>
          <strong>SELECT YOUR ROLE :</strong>
        </template>
        <div class="d-block text-center">
          <b-row>
            <b-col @click="$bvModal.hide('modalRegister')">
              <router-link to="/register-candidate">
                <b-button
                  variant="info"
                  class="mt-3"
                  block
                  @click="registerCandidatePage()"
                >Candidate</b-button>
              </router-link>
            </b-col>
            <b-col @click="$bvModal.hide('modalRegister')">
              <router-link to="/register-recruiter">
                <b-button
                  variant="warning"
                  style="color:white;"
                  class="mt-3"
                  block
                  @click="registerRecruiterPage()"
                >Recruiter</b-button>
              </router-link>
            </b-col>
          </b-row>
        </div>
      </b-modal>
    </div>
  </b-container>
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
