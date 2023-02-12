<template>
  <header-component/>
  <div class="container">
    <h3>Документы</h3>
    <div v-for="document in documents" :key="document.id">
      <a :href="document.downloadUrl">{{ document.originalName }}</a>
    </div>
    <img src="../../assets/inDevelopment.png" alt="">
  </div>
  <footer-component/>
</template>
<script>
import FooterComponent from "@/components/static/FooterComponent";
import HeaderComponent from "@/components/static/HeaderComponent";
import axios from "axios";

export default {
  components: {FooterComponent, HeaderComponent},
  name: 'ETextBooksComponent',
  data() {
    return {
      documents: [],
    }
  },
  mounted() {
    axios
        .get('http://api.malkollm.ru/Documents')
        .then((response) => {
          console.log(response.data)
          this.documents = response.data
        })
        .catch((error) => {
          console.log(error)
        })
  }
}
</script>