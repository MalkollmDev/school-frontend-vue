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
          <strong>{{ lesson.numberGroup }} класс</strong>
        </td>
      </tr>
      <tr colspan="2" v-for="(item, index) in lesson.lessonItems" v-bind:key="index">
        <td v-text="`${item.lessonStart} - ${item.lessonEnd}`"></td>
        <td v-text="item.lessonName"></td>
        <td v-text="`${item.lastName} ${item.firstName} ${item.middleName}`"></td>
        <td v-text="item.email"></td>
      </tr>
      </tbody>
    </table>
  </div>

  <div class="modal-dialog modal-dialog-centered">
    ...
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
        .get('https://localhost:7276/Lessons/GetSchedule')
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