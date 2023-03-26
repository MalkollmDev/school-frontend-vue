<template>
  <header-component/>
  <div class="container">
    <div class="row mb-3">
      <div class="col-2"></div>
      <div class="card mb-3 col-8">
        <form @submit.prevent="handleSubmit">
          <div class="row">
            <div class="col-8 mb-4">
              <label class="" for="inlineFormSelectPref">Выберите дату</label>
              <select class="form-select" id="inlineFormSelectPref" v-model="this.datew">
                <option v-for="date in dates" :value="date.date" :key="date.id">
                  {{ getFormatDate(date.date) }} {{ getDayOfWeek(date.date) }}
                </option>
              </select>
            </div>
            <div class="col-4 mb-4">
              <button type="submit" class="btn btn-primary mt-4">Посмотреть</button>
            </div>
          </div>
        </form>
        <h3>{{ this.currentDate.date }}</h3>
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Номер класса</th>
            <th scope="col">Дисциплина</th>
            <th scope="col">ФИО преподавателя</th>
          </tr>
          </thead>
          <tbody>
          <template v-for="value in lessons" :key="value.id">
            <tr colspan="2">
              <td>
                <strong>{{ value.numberGroup }} класс</strong>
              </td>
            </tr>
            <tr v-for="item in value.lessonItems" :key="item.id">
              <td>{{ `${item.lessonStart} - ${item.lessonEnd}` }}</td>
              <td>{{ item.lessonName }}</td>
              <td>{{ `${item.lastName} ${item.firstName} ${item.middleName}` }}</td>
            </tr>
          </template>
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
      datew: "",
    }
  },
  mounted() {
    axios
        .get('http://api.malkollm.ru/ScheduleDates')
        .then((response) => {
          this.dates = response.data
        })
        .catch((error) => {
          console.log(error)
        })

    axios
        .get('http://api.malkollm.ru/ScheduleDates/GetScheduleByDate', {
          params: {
            date: this.getCurrentDate()
          }
        })
        .then((response) => {
          this.currentDate = response.data
          this.lessons = response.data.lessons
          console.log(this.currentDate)
        })
        .catch((error) => {
          console.log(error)
        })
  },
  methods: {
    getCurrentDate() {
      const date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      return `${year}-0${month}-${day}T00:00:00`;
    },

    getDayOfWeek(date) {
      const dayOfWeek = new Date(date).getDay();
      return isNaN(dayOfWeek) ? null :
          ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][dayOfWeek];
    },

    getFormatDate(date) {
      console.log(date)
      return date.toString().split('T', 1)[0]
    },

    handleSubmit() {
      axios
          .get('http://api.malkollm.ru/ScheduleDates/GetScheduleByDate', {
            params: {
              date: this.datew
            }
          })
          .then((response) => {
            this.currentDate = response.data
            this.lessons = response.data.lessons
            console.log(this.currentDate)
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>