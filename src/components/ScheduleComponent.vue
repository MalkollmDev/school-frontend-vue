<template>
  <header-component/>
  <div class="container">
    <div class="row mb-3">
      <div class="col-2"></div>
      <div class="card mb-3 col-8">
        <form @submit.prevent="handleSubmit">
          <div class="col-12 mb-4">
            <label class="" for="inlineFormSelectPref">Выберите дату</label>
            <select class="form-select" id="inlineFormSelectPref" v-model="data.date">
              <option v-for="date in dates" :value="date.date" :key="date.id">
                {{ date.date }} {{ getDayOfWeek(date.date) }}
              </option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Посмотреть</button>
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Номер класса</th>
              <th scope="col">Дисциплина</th>
              <th scope="col">ФИО преподавателя</th>
              <th scope="col">Электронная почта</th>
            </tr>
            </thead>

            <tbody v-for="lesson in dates.lessons" :key="lesson.id">
            <tr colspan="2" >
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
        </form>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
  <footer-component/>
</template>

<script>
import {reactive} from "vue";
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
          this.dates = response.data
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
  setup() {
    const data = reactive({date: ""})

    function handleSubmit() {
      axios
          .get('https://localhost:7276/ScheduleDates/GetScheduleByDate', {
            params: {
              date: data.date
            }
          })
          .then((response) => {
            this.uniqueDates = response.data
            console.log(this.uniqueDates)
          })
          .catch((error) => {
            console.log(error)
          })
    }

    return {data, handleSubmit}
  },
  methods: {
    getDayOfWeek(date) {
      const dayOfWeek = new Date(date).getDay();
      return isNaN(dayOfWeek) ? null :
          ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][dayOfWeek];
    }
  }
}
</script>