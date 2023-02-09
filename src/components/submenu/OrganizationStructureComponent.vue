<template>
  <header-component/>
  <div class="container">
    <h3>Структура и органы управления организацией</h3>
    <img src="../../assets/orgStructure.png" alt="">
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