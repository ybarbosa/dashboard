<template>
  <v-app id="app">
    <sign-in />
  </v-app>
</template>

<script>
import SignIn from './components/SignIn'
export default {
  name: 'App',
  components: {
    'sign-in': SignIn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
