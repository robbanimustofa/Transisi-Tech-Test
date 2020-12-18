<template>
  <div id="app">
    <TransisiApp/>
  </div>
</template>

<script>
import TransisiApp from './components/TransisiApp.vue'

export default {
  name: 'App',
  components: {
    TransisiApp
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
