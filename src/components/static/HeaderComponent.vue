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
              <button type="button" class="btn btn-outline-primary">Обратиться к директору</button>
              <p></p>
              <p class="fs-5 fw-bold">+7 (952) 721-42-15</p>
              <p class="fs-5 fw-bold"><a href="academy.hm@yandex.ru">academy.hm@yandex.ru</a></p>
            </div>
          </div>
        </div>
        <MenuComponent/>
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