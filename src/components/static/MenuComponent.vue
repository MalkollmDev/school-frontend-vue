<template>
  <div class="container">
    <div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Главная</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Сведения об образовательной деятельности</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Новости</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Объявления</a>
        </li>
      </ul>
    </div>
    <div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Родителям</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Расписание</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Школьное питание</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Наши успехи</a>
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
    getPosts(){
      this.$router.push('addNew');
    }
  }
};
</script>