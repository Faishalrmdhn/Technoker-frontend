<template>
  <div>
    <HeaderLogin />
    <div class="gray">
      <div class="purple">
        <b-container class="pt-5">
          <b-row class="card-profile pt-5">
            <b-col cols="3" class="text-center">
              <b-card class="border-light mx-auto">
                <b-avatar size="7rem" class="mb-1">
                  <img src="@/assets/opinion3.jpg" style="width: 7rem" class="mt-4" />
                </b-avatar>
                <b-card-title class="mb-0">Harry Styles</b-card-title>
                <small class="text-muted">Web Developer</small>
                <b-card-text
                  class="mt-2 px-4"
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea nisi magni accusamus. Saepe sequi, culpa suscipit aut nam doloremque doloribus? Soluta laboriosam vitae odit!</b-card-text>
              </b-card>
            </b-col>
            <b-col cols="9" class="text-center">
              <b-card class="border-light">
                <div>
                  <b-tabs
                    style="font-size: 20px"
                    no-nav-style
                    content-class="mt-3"
                    active-nav-item-class="font-weight-bold text-dark"
                  >
                    <b-tab title="Portofolio" active>
                      <b-row>
                        <b-col cols="4">
                          <div>
                            <div style="width: 100%;">
                              <img src="@/assets/porto1.jpg" alt />
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </b-tab>
                    <b-tab title="Pengalaman Pekerjaan">
                      <h1>COBA</h1>
                    </b-tab>
                  </b-tabs>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogin from '@/components/HeaderLogin.vue'

export default {
  name: 'Profile',
  components: {
    HeaderLogin
  }
}
</script>

<style scoped>
.purple {
  height: 361px;
  background-color: #5e50a1;
  position: relative;
}
.gray {
  background-color: #e5e5ee;
}
</style>
