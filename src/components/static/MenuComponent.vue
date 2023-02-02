<template>
  <div class="container box-mb">
    <div class="box-menu">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Главная</a>
        </li>
        <li class="nav-item pointer">
          <a class="nav-link" @click="toAbout">Сведения об образовательной деятельности</a>
        </li>
        <li class="nav-item pointer">
          <a class="nav-link active" @click="toParents">Родителям</a>
        </li>
        <li class="nav-item pointer">
          <a class="nav-link" @click="toAchieve">Наши успехи</a>
        </li>
      </ul>
    </div>
    <div class="box-menu">
      <ul class="nav justify-content-center">
        <li class="nav-item pointer">
          <a class="nav-link" @click="toSchedule">Расписание</a>
        </li>
        <li class="nav-item pointer">
          <a class="nav-link"  @click="toMeal">Школьное питание</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  methods: {
    toAbout() {
      this.$router.push('about');
    },
    toSchedule() {
      this.$router.push('schedule');
    },
    toParents() {
      this.$router.push('parents');
    },
    toMeal() {
      this.$router.push('meal');
    },
    toAchieve() {
      this.$router.push('achieve');
    }
  }
};
</script>

<style>
.pointer {
  cursor: pointer;
}

.box-menu {
  font-size: 20px;
}
</style>