<template>
  <h3 class="m">Панель администратора</h3>
  <div class="container w-50 p-3">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" @click="toAddEvent">Добавить новость</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="toAddSchedule">Добавить расписание</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="container w-25 p-3">
    <form @submit.prevent="handleSubmit">
      <div class="form-floating mb-3">
        <input v-model="data.title" type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Заголовок новости</label>
      </div>
      <div class="form-floating">
        <textarea v-model="data.text" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                  style="height: 100px"></textarea>
        <label for="floatingTextarea2">Описание новости</label>
      </div>
      <div class="form-check mb-5">
        <input v-model="data.isPublished" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Публиковать новость?
        </label>
      </div>

      <div
          class="upload upload-picture-card"
          @click="triggerFileInputDialog"
      >
        <span style="display: none">
      <input
          id="image_upload"
          accept="image/*"
          multiple
          name="image_upload"
          type="file"
          @change="handleFileInput"
      >
    </span>
      </div>

      <button type="submit" class="btn btn-primary">Сохранить</button>
      <!--      <p>{{ JSON.stringify(data, null, 2) }}</p>-->
    </form>
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";

export default {
  components: {},
  name: 'AdminComponent',
  methods: {
    toAddEvent() {
      this.$router.push('addEvent');
    },
    toAddSchedule() {
      this.$router.push('addSchedule');
    },
  },
  setup() {
    const data = reactive({title: "", text: "", isPublished: false, files: []})

    function triggerFileInputDialog() {
      document.getElementById('image_upload')?.click();
    }

    function handleFileInput(e) {
      const result = [];
      console.log(e)
      const {files} = e.target

      if (!files || !files?.length) {
        return;
      }

      for (let i = 0; i < files.length; i += 1) {
        const name = files[i].name.split('.');

        result.push({
          name: name[0],
          extension: name[1],
          file: files[i],
        });
      }

      data.files.push(...result)
    }

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

    return {triggerFileInputDialog, handleFileInput, data, handleSubmit}
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