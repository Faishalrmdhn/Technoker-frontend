<template>
  <div>
    <HeaderLogin style="padding: 20px 0" />
    <b-jumbotron class="mb-0">
      <b-container>
        <b-row>
          <b-col cols="4">
            <b-card>
              <p>Chat</p>
              <hr />
              <div class="my-5">
                <b-img center fluid :src="require('@/assets/message.png')" alt="Image 1" class></b-img>
                <p class="text-center" style="font-size:15px">No New Inbox</p>
              </div>
              <div class="my-5"></div>
            </b-card>
          </b-col>
          <b-col cols="8" style="height: auto">
            <b-card>
              <p>{{data.user_name}}</p>
              <p>{{recruit.recruiter_name}}</p>
              <hr />
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
    <Footer />
  </div>
</template>

<script>
import HeaderLogin from '@/components/HeaderLogin'
import Footer from '@/components/Footer'
import { mapGetters } from 'vuex'

export default {
  name: 'Chat',
  components: {
    HeaderLogin,
    Footer
  },
  computed: {
    ...mapGetters({ data: 'user', recruit: 'recruiter' })
  },
  methods: {}
}
</script>

<style scoped>
</style>
