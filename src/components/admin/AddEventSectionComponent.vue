<template>
  <div class="container w-25 p-3">
    <form @submit.prevent="handleSubmit">
      <div class="form-floating mb-3">
        <input v-model="title" type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Заголовок новости</label>
      </div>
      <div class="form-floating">
        <textarea v-model="text" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                  style="height: 100px"></textarea>
        <label for="floatingTextarea2">Описание новости</label>
      </div>
      <div class="mb-3">
        <input class="form-control" accept="image/*" id="files" ref="files" type="file"
               @change="handleFileInput($event.target.files)"
               multiple>
      </div>
      <div class="form-check mb-5">
        <input v-model="isPublished" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Публиковать новость?
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Сохранить</button>
      <!--      <p>{{ JSON.stringify(data, null, 2) }}</p>-->
    </form>
  </div>
</template>

<script>
// import {reactive} from "vue";
import axios from "axios";

export default {
  components: {},
  name: 'AddEventSectionComponent',
  data() {
    return {
      title: "",
      text: "",
      isPublished: true,
      files: new FormData()
    }
  },
  methods: {
    handleFileInput(fileList) {
      this.files.append("title", this.title)
      this.files.append("content", this.text)
      this.files.append("isPublished", this.isPublished)

      for (let i = 0; i < fileList.length; i += 1) {
        this.files.append("file", fileList[i], fileList[i].name)
      }
    },

    handleSubmit() {
      axios
          .post('https://localhost:7276/Events/', this.files,
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
          ).then((response) => {
        console.log(response.data)
        console.log('SUCCESS!!')
      })
          .catch((error) => {
            console.log(error)
            console.log('FAILURE!!')
          })
    }
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