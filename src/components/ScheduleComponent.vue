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
          </tr>
          <tr colspan="2">
            <td>

            </td>
          </tr>
          </thead>

          <tbody v-for="lesson in lessons" :key="lesson.id">
          <tr colspan="2">
            <td>
              {{lesson.numberGroup}}
            </td>
          </tr>
          <tr>
            <td>{{ `${lesson.lastName} ${lesson.firstName} ${lesson.middleName}` }}</td>
            <td>{{ `${lesson.lastName} ${lesson.firstName} ${lesson.middleName}` }}</td>
            <td>{{ lesson.email }}</td>
          </tr>
          </tbody>
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
        .get('https://localhost:7276/Lessons/')
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