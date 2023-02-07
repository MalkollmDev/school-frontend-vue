<template>
  <admin-tab-component/>
  <div class="container text-center body-font box-mb">
    <div class="row">
      <div class="col-7">
        <div class="container" style="max-width: 850px">
          <div class="row" style="display: flex; flex-flow: row wrap; gap: 2px; justify-content: space-between;">
            <form @submit.prevent="handleSubmit">
              <div class="col-12 mb-4">
                <label class="" for="inlineFormSelectPref">Выберите класс</label>
                <select class="form-select" id="inlineFormSelectPref" v-model="data.classId">
                  <option v-for="group in groups" :value="group.id" :key="group.id">
                    {{ group.number }} класс
                  </option>
                </select>
              </div>
              <div class="col-12 mb-4">
                <label class="" for="inlineFormSelectPref">Выберите предмет</label>
                <select class="form-select" id="inlineFormSelectPref" v-model="data.lessonId">
                  <option selected v-for="lesson in lessons" :value="lesson.id" :key="lesson.id">
                    {{ lesson.name }}
                  </option>
                </select>
              </div>
              <div class="col-12 mb-4">
                <label class="" for="inlineFormSelectPref">Выберите преподавателя</label>
                <select class="form-select" id="inlineFormSelectPref" v-model="data.teacherId">
                  <option v-for="teacher in teachers" :value="teacher.id" :key="teacher.id">
                    {{ `${teacher.lastName} ${teacher.firstName} ${teacher.middleName}` }}
                  </option>
                </select>
              </div>
              <div class="col-12 mb-4">
                <label class="" for="inlineFormSelectPref">Выберите время занятия</label>
                <select class="form-select" id="inlineFormSelectPref" v-model="data.lessonTimeId">
                  <option v-for="time in lessonTimes" :value="time.id" :key="time.id">
                    {{ time.lessonStart }} - {{ time.lessonEnd }}
                  </option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">Сохранить</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-5">
        <aside-schedule-component/>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";
import AdminTabComponent from "@/components/admin/AdminTabComponent";
import AsideScheduleComponent from "@/components/admin/AsideScheduleComponent";

export default {
  components: {AsideScheduleComponent, AdminTabComponent},
  name: 'AddScheduleSectionComponent',
  data() {
    return {
      groups: [],
      lessonTimes: [],
      lessons: [],
      teachers: [],
    }
  },
  created() {
    axios
        .get('http://api.malkollm.ru/Groups/')
        .then((response) => {
          this.groups = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    axios
        .get('http://api.malkollm.ru/Lessons/')
        .then((response) => {
          this.lessons = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    axios
        .get('http://api.malkollm.ru/Teachers/')
        .then((response) => {
          this.teachers = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    axios
        .get('http://api.malkollm.ru/LessonTimes/')
        .then((response) => {
          this.lessonTimes = response.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
  setup() {
    const data = reactive({classId: "", lessonId: "", teacherId: "", lessonTimeId: ""})

    function handleSubmit() {
      const formData = new FormData();
      formData.append('lessonId', data.lessonId);
      formData.append('groupId', data.classId);
      formData.append('teacherId', data.teacherId);
      formData.append('lessonTimeId', data.lessonTimeId);

      axios
          .post('http://api.malkollm.ru/Lessons/AddSchedule/', formData)
          .then(() => {
            location.reload()
          })
          .catch((error) => {
            console.log(error)
          })
    }

    return {data, handleSubmit}
  }
}
</script>
<style scoped>
.upload-picture-card i {
  margin-top: 66px;
  font-size: 30px;
  color: #8c939d;
}
</style>