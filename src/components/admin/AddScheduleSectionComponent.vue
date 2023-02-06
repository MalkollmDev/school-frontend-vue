<template>
  <admin-tab-component/>
  <div class="container text-center body-font box-mb">
    <div class="row">
      <div class="col-7">
        <div class="container" style="max-width: 850px">
          <div class="card border-success mb-3">
            <div class="card-header">Выбранные настройки:</div>
            <div class="card-body text-success">
              <h6 class="card-title">Выбранный класс</h6>
              <p class="card-text">{{ selectedClass }}</p>
              <h6 class="card-title">Выбранный предмет</h6>
              <p class="card-text">{{ selectedLesson }}</p>
              <h6 class="card-title">Выбранный преподаватель</h6>
              <p class="card-text">{{ selectedTeacher }}</p>
              <h6 class="card-title">Выбранное время</h6>
              <p class="card-text">{{ selectedTime }}</p>
            </div>
          </div>
          <div class="row" style="display: flex; flex-flow: row wrap; gap: 2px; justify-content: space-between;">
            <form @submit.prevent="handleSubmit">
              <!--      Выбор класса-->
              <div class="col-12 mb-4">
                <label class="" for="inlineFormSelectPref">Выберите класс</label>
                <select class="form-select" id="inlineFormSelectPref" v-model="selectedClass">
                  <option v-for="group in groups" :key="group.id">
                    {{ group.number }} класс
                  </option>
                </select>
              </div>
              <!--      Выбор урока-->
              <div class="col-12 mb-4">
                <label class="" for="inlineFormSelectPref">Выберите предмет</label>
                <select class="form-select" id="inlineFormSelectPref" v-model="selectedLesson">
                  <option selected>Выберите предмет</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <!--      Выбор преподавателя-->
              <div class="col-12 mb-4">
                <label class="" for="inlineFormSelectPref">Выберите преподавателя</label>
                <select class="form-select" id="inlineFormSelectPref" v-model="selectedTeacher">
                  <option selected>Выберите преподавателя</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <!--      Выбор времени занятия-->
              <div class="col-12 mb-4">
                <label class="" for="inlineFormSelectPref">Выберите время занятия</label>
                <select class="form-select" id="inlineFormSelectPref" v-model="selectedTime">
                  <option v-for="time in lessonTimes" :key="time.id">
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
      selectedClass: "",
      lessonTimes: [],
      selectedTime: "",
      selectedLesson: "",
      selectedTeacher: "",
    }
  },
  created() {
    axios
        .get('http://api.malkollm.ru/Groups/')
        .then((response) => {
          console.log(response.data)
          this.groups = response.data
        })
        .catch((error) => {
          console.log(error)
        })
        axios
            .get('http://api.malkollm.ru/LessonTimes/')
            .then((response) => {
              console.log(response.data)
              this.lessonTimes = response.data
            })
            .catch((error) => {
              console.log(error)
            })
  },
  setup() {
    const data = reactive({title: "", text: "", isPublished: false, files: []})

    function handleSubmit() {
      const formData = new FormData();
      formData.append('EventId', data.title);
      formData.append('File', data.files);

      axios
          .post('http://api.malkollm.ru/News/', formData)
          .then((response) => {
            console.log(response.data)
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
.upload {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  outline: 0;
}

.upload-picture-card {
  background-color: #fbfdff;
  border: 1px dashed #c0ccda;
  border-radius: 5px;
  box-sizing: border-box;
  width: 162px;
  height: 162px;
  cursor: pointer;
  vertical-align: top;
}

.upload-picture-card:hover {
  border-color: #409eff;
  color: #409eff;
}

.upload-picture-card i {
  margin-top: 66px;
  font-size: 30px;
  color: #8c939d;
}
</style>