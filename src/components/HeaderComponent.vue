<template>
  <div>
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-3">
          <img src="../assets/logo.png" class="rounded mx-auto d-block" width="100px">
        </div>
        <div class="col-sm-9">
          <div class="row">
            <div class="col-8 col-sm-8">
              <p class="fs-2 fw-bold text-right">"абв Академия" <br>в Ханты-Мансийске</p>
            </div>
            <div class="col-4 col-sm-4">
              <button type="button" class="btn btn-outline-primary" disabled>Обратиться к директору</button>
              <p></p>
              <p class="fs-5 fw-bold">+7 (952) 721-42-15</p>
              <p class="fs-5 fw-bold"><a href="academy.hm@yandex.ru">academy.hm@yandex.ru</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    Menu-->
    <div class="container">
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
    <div class="container">
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
};
</script>