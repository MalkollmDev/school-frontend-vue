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
</template>

<script>

export default {
  components: {},
  name: 'AdminTabComponent',
  methods: {
    toAddEvent() {
      this.$router.push('addEvent');
    },
    toAddSchedule() {
      this.$router.push('addSchedule');
    },
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