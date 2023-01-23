<template>
  <header-component/>
  <div class="container">
    <div class="row mb-3">
      <div class="col-2"></div>
      <div class="card mb-3 col-8">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          </thead>
          <div v-for="lesson in lessons" :key="lesson.id">
            <tbody>
            <tr>
              <th scope="row">{{ lesson.id }}</th>
              <td>{{ lesson.name }}</td>
            </tr>
            </tbody>
          </div>
        </table>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
  <footer-component/>
</template>

<script>
import axios from 'axios'
import HeaderComponent from './static/HeaderComponent'
import FooterComponent from "@/components/static/FooterComponent";

export default {
  components: {FooterComponent, HeaderComponent},
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