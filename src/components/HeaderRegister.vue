<template>
  <b-container class="nav-grid py-3">
    <div>
      <img src="../assets/technoker1.png" alt />
    </div>
    <div class="button-login-register text-right align-self-center">
      <router-link to="/login">
        <b-button class="login-btn mx-4">Login</b-button>
      </router-link>
      <b-button
        class="register-btn"
        style="width: 100px; height: 40px"
        @click="$bvModal.show('modalRegister')"
        >Register</b-button
      >
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
                  >Candidate</b-button
                >
              </router-link>
            </b-col>
            <b-col @click="$bvModal.hide('modalRegister')">
              <router-link to="/register-recruiter">
                <b-button
                  variant="warning"
                  style="color: white"
                  class="mt-3"
                  block
                  @click="registerRecruiterPage()"
                  >Recruiter</b-button
                >
              </router-link>
            </b-col>
          </b-row>
        </div>
      </b-modal>
    </div>
  </b-container>
</template>

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
}

.login-btn:hover,
.register-btn:hover {
  background-color: #fbb017;
  border-color: #fbb017;
}
</style>
