<template>
  <div class="main_wrapper">
      <Navbar :navbarData="navbarData"></Navbar>
      <router-view />
    </div>
</template>

<script>
export default {
  name:"App",
  data(){
    return{
      navbarData:{
        logo: require("@/assets/images/logo.png")
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
