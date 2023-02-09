<template>
  <header-component/>
  <div class="container w-25">
    <h3 class="mb-5">Контакты</h3>
<!--    Администратор-->
    <div class="card mb-3 p-2" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="../../assets/administrator.png" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
<!--            <h5 class="card-title">Толокнова Юлия Борисовна</h5>-->
            <p class="card-text">+7(3467)326992</p>
            <p class="card-text"><small class="text-muted" style="font-weight: bold;">Администратор</small></p>
          </div>
        </div>
      </div>
    </div>
<!--    Директор-->
    <div class="card mb-3 p-2" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="../../assets/director.png" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Толокнова Юлия Борисовна</h5>
            <p class="card-text">+79527214215</p>
            <p class="card-text"><small class="text-muted" style="font-weight: bold;">Директор</small></p>
          </div>
        </div>
      </div>
    </div>
<!--    Заместитель-->
    <div class="card mb-3 p-2" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="../../assets/administrator.png" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Кузнецова Валентина Александровна</h5>
            <p class="card-text">+789028143164</p>
            <p class="card-text"><small class="text-muted" style="font-weight: bold;">Заместитель директора по НМР</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-component/>
</template>
<script>
import FooterComponent from "@/components/static/FooterComponent";
import HeaderComponent from "@/components/static/HeaderComponent";

export default {
  components: {FooterComponent, HeaderComponent},
  name: 'ETextBooksComponent',
  data() {
    return {}
  }
}
</script>