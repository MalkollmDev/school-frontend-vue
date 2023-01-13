<template>
  <header-component />
  <main-component />
  <test-component />
  <footer-component />
</template>

<script>
import MainComponent from './components/BodyComponent.vue'

export default {
  components: { MainComponent },
  name: 'App'
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
