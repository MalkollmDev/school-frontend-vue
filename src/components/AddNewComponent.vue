<template>
  <header-component />
  <h1>adasd</h1>
  <footer-component />
</template>

<script>
import HeaderComponent from './static/HeaderComponent'
import FooterComponent from "@/components/static/FooterComponent";

export default {
  components: {FooterComponent, HeaderComponent },
  name: 'App',
  data() {
    return {
      posts: [],
    }
  },
}
</script>