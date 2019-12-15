<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Navbar :key="$route.fullPath"/>
    <div class="container">
    <router-view/>  
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
</style>
