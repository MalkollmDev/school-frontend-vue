<template>
  <header-component/>
  <div class="container">
    <h3>Здесь будет информация по питанию</h3>
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