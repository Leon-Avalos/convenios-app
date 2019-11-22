<template>
  <div class="home">
    <Dashboard></Dashboard>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'
import firebase from 'firebase'

export default {
  name: 'home',
  components: {
    Dashboard
  },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
