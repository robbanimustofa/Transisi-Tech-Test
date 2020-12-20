<template>
  <div id="app">
    <Alert/>
    <router-view class="vh-100"/>
  </div>
</template>

<script>

import Alert from './components/Alert Components/Alert'
// import $ from 'jquery'
export default {
  name: 'App',
  components: {
      Alert
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
