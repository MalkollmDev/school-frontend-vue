<template>
  <header-component/>
  <aside-schedule-component />
  <footer-component/>
</template>

<script>
import axios from 'axios'
import HeaderComponent from './static/HeaderComponent'
import FooterComponent from "@/components/static/FooterComponent";
import AsideScheduleComponent from "@/components/admin/AsideScheduleComponent";

export default {
  components: {AsideScheduleComponent, FooterComponent, HeaderComponent},
  name: 'App',
  data() {
    return {
      lessons: [],
    }
  },
  mounted() {
    axios
        .get('http://api.malkollm.ru/Lessons/')
        .then((response) => {
          console.log(response.data)
          this.lessons = response.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
}
</script>