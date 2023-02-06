<template>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <h5>Текущее расписание</h5>
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
      <tr colspan="2">
        <td>
          <strong>{{lesson.numberGroup}} класс</strong>
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
</template>
<script>

import axios from "axios";

export default {
  components: {},
  name: 'AsideScheduleComponent',
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