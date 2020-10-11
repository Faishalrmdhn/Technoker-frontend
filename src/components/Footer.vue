<template>
  <div style="background-color: #5e50a1">
    <b-container class="footer py-3">
      <div>
        <img
          src="../assets/technoker_auth.png"
          alt="technoker"
          style="width: 230px; height: 80px"
        />
      </div>
      <p class="foot-text my-3">
        Technoker adalah salah satu JobPortal yang berperan sebagai fasilitator
        pencocokan dan komunikasi lapangan kerja atau projek antara Pekerja dan
        Perusahaan (Perekrut)
      </p>
      <br />
      <hr />
      <div class="btm-text">
        <p>2020 Technoker. All right reserved</p>
        <div class="phone-email">
          <p class="mx-5">Phone: 09282272622</p>
          <p>Email: technoker@gmail.com</p>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style scoped>
.foot-text {
  width: 381px;
  height: 84px;
  color: white;
  font-size: 17px;
  font-weight: normal;
}

hr {
  background-color: white;
  width: 100%;
}

.btm-text {
  display: flex;
  color: white;
  justify-content: space-between;
}

.phone-email {
  display: flex;
  justify-content: space-between;
}
</style>
