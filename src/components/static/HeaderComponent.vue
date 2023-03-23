<template>
  <div class="box-mt">
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-3">
          <a href="#"><img src="../../assets/logo.png" class="rounded mx-auto d-block img-fluid box-img" alt=""></a>
        </div>
        <div class="col-sm-9">

          <div class="row">
            <div class="col-8 col-sm-8">
              <p class="fs-2 fw-bold text-right">"абв Академия" <br>в Ханты-Мансийске</p>
            </div>
            <div class="col-4 col-sm-4">
              <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                      data-bs-target="#exampleModal">Обратиться к директору
              </button>
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
              <h1 class="modal-title fs-5" id="exampleModalLabel">Новая заявка</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form @submit.prevent="handleSubmit">
              <div class="input-group mb-3 mt-3">
                <span class="input-group-text">ФИО</span>
                <input v-model="data.lName" type="text" aria-label="Last name" class="form-control" placeholder="Фамилия">
                <input v-model="data.fName" type="text" aria-label="First name" class="form-control" placeholder="Имя">
                <input v-model="data.mName" type="text" aria-label="Middle name" class="form-control" placeholder="Отчество">
              </div>
              <!--            TODO Накинуть маску для телефона-->
              <div class="input-group flex-nowrap mb-3">
                <span class="input-group-text" id="addon-wrapping">Тел.</span>
                <input v-model="data.phone" type="text" data-mask="999-999-9999?9" class="form-control" placeholder="Номер телефона" aria-label="Username"
                       aria-describedby="addon-wrapping">
              </div>
              <div class="input-group flex-nowrap mb-3">
                <span class="input-group-text" id="addon-wrapping">Email</span>
                <input v-model="data.email" type="text" class="form-control" placeholder="Электронная почта" aria-label="Username"
                       aria-describedby="addon-wrapping">
              </div>
              <div class="input-group">
                <span class="input-group-text">Текст</span>
                <textarea v-model="data.text" class="form-control" aria-label="With textarea"
                          placeholder="Введите текст обращения..."></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                <button type="submit" class="btn btn-primary">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import MenuComponent from './MenuComponent'
import axios from "axios";
import {reactive} from "vue";

export default {
  components: {MenuComponent},
  name: 'HeaderComponent',
  data() {
    return {};
  },
  setup() {
    const data = reactive({lName: "", fName: "", mName: "", phone: "", text: "", email: ""})

    function handleSubmit() {
      const formData = new FormData();
      formData.append('lastName', data.lName);
      formData.append('firstName', data.fName);
      formData.append('middleName', data.mName);
      formData.append('phone', data.phone);
      formData.append('text', data.text);
      formData.append('email', data.email);

      console.log(formData)
      axios
          // .post('https://localhost:7276/Appeals/', formData
          .post('http://api.malkollm.ru/Appeals/', formData
          ).then(() => {
        location.reload()
      })
          .catch((error) => {
            console.log(error)
            console.log('FAILURE!!')
          })
    }

    return {data, handleSubmit}
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