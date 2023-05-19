<template>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <div class="card">
      <div class="card-header">
        Объявления
      </div>
      <ul class="list-group list-group-flush" style="text-align: left;">
        <li class="list-group-item">19.05.2023 <a href="/">Родительское собрание</a></li>
        <li class="list-group-item">14.04.2023 <a href="/">Экскурсия в пекарню</a></li>
        <li class="list-group-item">10.03.2023 <a href="/">Анонс мероприятия "Квартирник"</a></li>
      </ul>
    </div>
    <div class="card">
      <a href="#"><img src="../assets/Mentoring.png" alt=""></a>
    </div>
    <div class="card">
      <a href="https://vk.com/abvacademy"><img src="../assets/vk.png" alt=""></a>
    </div>
  </div>
</template>
<script>

export default {
  components: {},
  name: 'AsideComponent',
  data() {
    return {}
  }
}
</script>