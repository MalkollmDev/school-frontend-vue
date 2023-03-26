<template>
  <header-component/>
  <div class="container">
    <div class="row mb-3">
      <div class="col-2"></div>
      <div class="card mb-3 col-8">
        <div class="">
          <span class="me-3" v-for="date in uniqueDates" :key="date.id">
            {{ date }}
          </span>
        </div>
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Номер класса</th>
            <th scope="col">Дисциплина</th>
            <th scope="col">ФИО преподавателя</th>
            <th scope="col">Электронная почта</th>
          </tr>
          </thead>

          <tbody v-for="lesson in lessons" :key="lesson.id">
          <tr colspan="2" v-for="item in lesson" :key="item.id">
            <td v-for="value in item" :key="value.id">
              <strong>{{ value.numberGroup }} класс</strong>
            </td>
          </tr>
          <tr colspan="2" v-for="value in lesson.lessonItems" :key="value.id">
            <td>{{ `${value.lessonStart} - ${value.lessonEnd}` }}</td>
            <td>{{ value.lessonName }}</td>
            <td>{{ `${value.lastName} ${value.firstName} ${value.middleName}` }}</td>
            <td>{{ value.email }}</td>
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
  name: 'ScheduleComponent',
  data() {
    return {
      dates: [],
      uniqueDates: [],
      lessons: [],
      currentDate: "",
    }
  },
  mounted() {
    axios
        .get('https://localhost:7276/ScheduleDates')
        .then((response) => {
          console.log(response.data)
          for (let d of response.data) {
            const dateFromDb = new Date(d.date).toISOString().split('T', 1)[0]
            const dateCurrent = new Date().toISOString().split('T', 1)[0]
            console.log("db " + dateFromDb)
            console.log("cur " + dateCurrent)
            console.log(dateFromDb >= dateCurrent)

            if (dateFromDb >= dateCurrent) {
              this.dates.push(dateFromDb)
              this.dates.sort()
            }
          }
          this.uniqueDates = this.dates.filter((item, i, ar) => ar.indexOf(item) === i)
        })
        .catch((error) => {
          console.log(error)
        })

    axios
        .get('http://api.malkollm.ru/ScheduleDates/GetScheduleByDate')
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