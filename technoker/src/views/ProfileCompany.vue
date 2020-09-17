<template>
  <div>
    <HeaderLogin />
    <div style="background-color: #e5e5e5">
      <b-jumbotron class="mb-0">
        <b-container>
          <div class="purple"></div>
          <div class="white">
            <img src="@/assets/opinion1.jpg" alt />
          </div>
        </b-container>
      </b-jumbotron>
    </div>
    <Footer class="mt-0" />
  </div>
</template>

<script>
import HeaderLogin from '@/components/HeaderLogin.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ProfileCompany',
  components: {
    HeaderLogin,
    Footer
  }
}
</script>

<style scoped>
.purple {
  height: 200px;
  background-color: #5e50a1;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}
.white {
  background-color: #ffff;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}
</style>
