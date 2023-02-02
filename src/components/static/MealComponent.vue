<template>
  <header-component/>
  <div class="container">
    <img src="../../assets/inDevelopment.png" alt="">
  </div>
  <footer-component/>
</template>
<script>
import FooterComponent from "@/components/static/FooterComponent";
import HeaderComponent from "@/components/static/HeaderComponent";

export default {
  components: {FooterComponent, HeaderComponent},
  name: 'App',
  data() {
    return {}
  }
}
</script>