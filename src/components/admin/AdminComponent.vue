<template>
  <h3 class="m">Панель администратора</h3>
  <div id="app">
    <div class="container">
      <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Расписание</button>
          <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
          <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
          <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
          <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0"><add-schedule-section-component/></div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">...</div>
          <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";
import AddScheduleSectionComponent from "@/components/admin/AddScheduleSectionComponent.vue";

export default {
  components: {AddScheduleSectionComponent},
  name: 'AdminComponent',
  methods: {
    toAddEvent() {
      this.$router.push('addEvent');
    },
    toAddSchedule() {
      this.$router.push('addSchedule');
    },
    isActive(menuItem) {
      return this.activeItem === menuItem
    },
    setActive(menuItem) {
      this.activeItem = menuItem
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
          .post('https://localhost:7276/News/', formData)
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