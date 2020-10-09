<template>
  <div style="background-color:#5e50a1">
    <b-col cols="12">
      <b-container class="footer">
        <div class="pt-5">
<<<<<<< HEAD
          <img style="width:100px; height:40px" src="../assets/img/technoker.png" alt />
=======
          <img src="../assets/img/technoker.png" style="width:100px; height: 70px" alt />
>>>>>>> 7d7de540cb4f40a351d5ae1f4255e282069c4e9a
        </div>
        <p
          class="foot-text mt-4"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aut dignissimos velit! Tempora, possimus minus.</p>
        <hr class="mt-5" />
        <div class="btm-text pb-5">
          <p>2020 Technoker. All right reserved</p>
          <div class="phone-email">
            <p>Phone</p>
            <p>Email</p>
          </div>
        </div>
      </b-container>
    </b-col>
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
b-col {
  background-color: #5e50a1 !important;
}
.footer {
  text-align: left;
}
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
  width: 140px;
  justify-content: space-between;
}
</style>
