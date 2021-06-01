<template>
  <div class="home" @click="home">
    <h1>
      PFC Management
      <br>
      Caluclated Food Service
      <br>
    </h1>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  methods: {
    // home() {
    //   $router.push('/research');
    // },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert('ログアウトが完了しました')
          this.$router.replace('/login')
        })
    }
  },
  created() {
    firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          this.message = "Already Logined"
        }
      })
  }
  
}
</script>

<style scoped>
h1 {
  padding-top: 300px;
  line-height: 4em;
}
</style>