<template>
  <admin-tab-component/>
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
      <div class="mb-3">
        <input class="form-control" id="files" ref="files" type="file" @change="handleFileInput" multiple>
      </div>
      <div class="form-check mb-5">
        <input v-model="data.isPublished" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
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
import {reactive} from "vue";
import axios from "axios";
import AdminTabComponent from "@/components/admin/AdminTabComponent";

export default {
  components: {AdminTabComponent},
  name: 'AdminComponent',
  data() {
    return {
      files: ''
    }
  },
  setup() {
    const data = reactive({title: "", text: "", isPublished: false, files: []})

    function handleSubmit() {
      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('content', data.text);
      formData.append('isPublished', data.isPublished);
      formData.append('isPublished', data.files);

      axios
          .post('http://api.malkollm.ru/Events/', formData,
          ).then((response) => {
        console.log(response.data)
        console.log('SUCCESS!!')
      })
          .catch((error) => {
            console.log(error)
            console.log('FAILURE!!')
          })
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

    return {handleFileInput, data, handleSubmit}
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