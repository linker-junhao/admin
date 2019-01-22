<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <WelcomePage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomePage from '@/idxLib/components/WelcomePage.vue'

export default {
  name: 'home',
  components: {
    WelcomePage
  }
}
</script>
