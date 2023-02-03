<template>
  <div class="box-mt">
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-3">
          <img src="../../assets/logo.png" class="rounded mx-auto d-block img-fluid box-img" alt="">
        </div>
        <div class="col-sm-9">

          <div class="row">
            <div class="col-8 col-sm-8">
              <p class="fs-2 fw-bold text-right">"абв Академия" <br>в Ханты-Мансийске</p>
            </div>
            <div class="col-4 col-sm-4">
              <!--              <button type="button" @click="getPosts" class="btn btn-outline-primary">Добавить новость</button>-->
              <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Обратиться к директору</button>
              <p></p>
              <p class="fs-5 fw-bold">+7 (952) 721-42-15</p>
              <p class="fs-5 fw-bold"><a href="academy.hm@yandex.ru">academy.hm@yandex.ru</a></p>
            </div>
          </div>
        </div>
        <MenuComponent/>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content p-3">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Обратиться к директору</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="input-group mb-3 mt-3">
              <span class="input-group-text">ФИО</span>
              <input type="text" aria-label="First name" class="form-control" placeholder="Фамилия">
              <input type="text" aria-label="Last name" class="form-control" placeholder="Имя">
              <input type="text" aria-label="Last name" class="form-control" placeholder="Отчество">
            </div>
            <div class="input-group flex-nowrap mb-3">
              <span class="input-group-text" id="addon-wrapping">Тел.</span>
              <input type="text" class="form-control" placeholder="Номер телефона" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            <div class="input-group">
              <span class="input-group-text">Текст</span>
              <textarea class="form-control" aria-label="With textarea" placeholder="Введите текст обращения..."></textarea>
            </div>
            <div class="modal-body mb-3">
              <div class="input-group">
                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
<!--                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>-->
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
              <button type="button" class="btn btn-primary">Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import MenuComponent from './MenuComponent'

export default {
  components: {MenuComponent},
  name: 'App',
  data() {
    return {};
  },
  methods: {
    getPosts() {
      this.$router.push('addNew');
    }
  }
};
</script>
<style>
.box-img {
  width: 130px;
  height: 130px;
}

.box-mt {
  margin-top: 38px;
}
</style>