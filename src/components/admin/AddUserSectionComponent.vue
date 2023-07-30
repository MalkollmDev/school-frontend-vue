<template>
  <div class="container text-center body-font box-mb">
    <div class="row">
      <div class="col-7">
        <div class="container" style="max-width: 850px">
          <div class="row" style="display: flex; flex-flow: row wrap; gap: 2px; justify-content: space-between;">
            <form @submit.prevent="handleSubmit">
              <div class="col-12 mb-4">
                <label class="" for="inlineFormSelectPref">Выберите класс</label>
                <select class="form-select" id="inlineFormSelectPref" v-model="data.groupId">
                  <option v-for="group in groups" :value="group.id" :key="group.id">
                    {{ group.number }} класс
                  </option>
                </select>
              </div>
              <div class="col-12 mb-4">
                <label class="" for="inlineFormSelectPref">Выберите роль пользователя</label>
                <select class="form-select" id="inlineFormSelectPref" v-model="data.roleId">
                  <option selected v-for="role in roles" :value="role.id" :key="role.id">
                    {{ role.name }}
                  </option>
                </select>
              </div>
              <div>
                <p>
                  {{ result }}
                </p>
              </div>
              <button type="submit" class="btn btn-primary">Сохранить</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-5">
        <aside-user-component/>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";
import AsideUserComponent from "@/components/admin/AsideUserComponent";

export default {
  components: {AsideUserComponent},
  name: 'AddUserSectionComponent',
  data() {
    return {
      groups: [],
      roles: [],
      baseWord: 'school',
      result: [],
    }
  },
  created() {
    axios
        .get('https://localhost:7276/Groups/')
        .then((response) => {
          this.groups = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    axios
        .get('https://localhost:7276/Roles/')
        .then((response) => {
          this.roles = response.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
  setup() {
    const data = reactive({groupId: "", roleId: ""})
    console.log(data)

    function handleSubmit() {
      const formData = new FormData();
      formData.append('lessonId', data.roleId);
      formData.append('groupId', data.groupId);

      axios
          .post('https://localhost:7276/Lessons/AddSchedule/', formData)
          .then(() => {
            location.reload()
          })
          .catch((error) => {
            console.log(error)
          })
    }

    return {data, handleSubmit}
  },
  mounted() {
    const randomVariants = [...Array(80)].map(() =>
        this.baseWord
            .split('')
            .sort(() => 0.5 - Math.random())
            .join('')
    )
    const variantsWithoutInitialWord = randomVariants.filter(
        (word) => word !== this.baseWord // removes 'orange' if present
    )
    this.result = [...new Set(variantsWithoutInitialWord)] // removing duplicates
  },
}
</script>
<style scoped>
.upload-picture-card i {
  margin-top: 66px;
  font-size: 30px;
  color: #8c939d;
}
</style>