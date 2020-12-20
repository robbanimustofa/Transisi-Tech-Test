<template>
  <div id="app">
    <Alert/>
    <Loader id="loader"/>
    <router-view class="vh-100"/>
  </div>
</template>

<script>

import Alert from './components/Alert Components/Alert'
import Loader from './components/Loader Component/loaderComponent'
import $ from 'jquery'
export default {
  name: 'App',
  components: {
      Alert,Loader
  },
  mounted() {
    $('#loader').hide()
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
