<template>
  <div>
    <hr>
    <p class="fs-5 fw-bold">+7 (952) 721-42-15</p>
    <MenuComponent />
    <div>
      <p></p>
      <p class="fs-5">©2022 Академия Больших Возможностей "абв Академия"</p>
      <p>Россия, Ханты-Мансийск, ул. Энгельса 3 (секц. 4, этаж 1)</p>
    </div>
    <div class="row">
      <div class="col-7"></div>
      <div class="col-5">
        <p></p>
        <p class="text-center">Размещение сайта - <a href="http://malkollm.ru/">malkollm.ru</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import MenuComponent from './MenuComponent'
export default {
  components: {MenuComponent },
  name: 'App',
  data() {
    return {}
  }
}
</script>