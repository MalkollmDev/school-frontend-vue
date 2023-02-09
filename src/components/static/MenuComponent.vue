<template>
  <div class="container box-mb">
    <div class="box-menu">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Главная</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Сведения об образовательной деятельности
          </a>
          <ul class="dropdown-menu">
            <li class="pointer">
              <a class="dropdown-item" @click="toAbout">Основные сведения</a>
            </li>
            <li class="pointer">
              <a class="dropdown-item" @click="toOrgStructure">Структура и органы управления организацией</a>
            </li>
            <li class="pointer">
              <a class="dropdown-item" @click="toDocuments">Документы</a>
            </li>
            <li class="pointer">
              <a class="dropdown-item" @click="toContacts">Контакты</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ученикам
          </a>
          <ul class="dropdown-menu">
            <li class="pointer">
              <a class="dropdown-item" @click="toETextbooks">Электронные учебники</a>
            </li>
            <li class="pointer">
              <a class="dropdown-item" @click="toOlympiad">Олимпиады и конкурсы</a>
            </li>
          </ul>
        </li>
        <li class="nav-item pointer">
          <a class="nav-link active" @click="toParents">Родителям</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Педагогам
          </a>
          <ul class="dropdown-menu">
            <li class="pointer">
              <a class="dropdown-item" @click="toProjects">Программы и проекты</a>
            </li>
            <li class="pointer">
              <a class="dropdown-item" @click="toPublications">Публикации</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="box-menu">
      <ul class="nav justify-content-center">
        <li class="nav-item pointer">
          <a class="nav-link" @click="toSchedule">Расписание</a>
        </li>
        <li class="nav-item pointer">
          <a class="nav-link" @click="toMeal">Школьное питание</a>
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
    toOrgStructure() {
      this.$router.push('orgStructure');
    },
    toETextbooks() {
      this.$router.push('textbooks');
    },
    toOlympiad() {
      this.$router.push('olympiad');
    },
    toProjects() {
      this.$router.push('projects');
    },
    toPublications() {
      this.$router.push('publications');
    },
    toDocuments() {
      this.$router.push('documents');
    },
    toContacts() {
      this.$router.push('contacts');
    },
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