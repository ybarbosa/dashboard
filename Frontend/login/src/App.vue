<template>
  <v-app
    id="app"
  >
   
    <v-app-bar
      color="#4A148C"
      max-height="70px"
    >
      <v-row
        no-gutters
      >
        <v-col>
          <span
            class="white--text text-h5 text-center"
          > 
            Login
          </span>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-row
    
      justify="center"
    >

      <v-col
        md="6"
        class="backcground d-flex  justify-center align-center"
        v-if="$vuetify.breakpoint.mdAndUp" 
      >
        <v-img
            :src="background"
            min-width="60%"
            max-width="70%"
        />
      </v-col>
      <v-col
        cols="11"
        md="6"
      >
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view />
        </transition>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import assets from './assets'
export default {
  name: 'App',
  data () {
    return {
      background: assets.background
    }
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
}
.header-color {
  height: 70px;
}
.backcground {
    min-height: calc(100vh - 70px);
    background: #E8EAF6;
}
</style>
