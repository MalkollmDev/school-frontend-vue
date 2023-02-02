<template>
  <div class="container text-center body-font box-mb">
    <div class="row">
      <div class="container" style="max-width: 850px">
        <div class="box-title box-mb">Новости</div>
        <div class="row" style="display: flex; flex-flow: row wrap; gap: 2px; justify-content: space-between;">
          <div class="col" v-for="event in events" :key="event.id" style="border:1px solid #8c939d; border-radius: 10px; flex: 0 0 22%; margin-bottom: 10px;">
            <div style="height: 4rem;">{{ event.title }}</div>
            <div><img src="../assets/carousel/img_1.png" class="card-img-top mt-2" alt="..."></div>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="max-width: max-content">
          <div class="card-header">
            Объявления
          </div>
          <ul class="list-group list-group-flush" style="text-align: left;">
            <li class="list-group-item">19.12.2022 <a href="/">Режим работы хоккейного корта</a></li>
            <li class="list-group-item">14.10.2022 <a href="/">Прием граждан по вопросам ПФДО</a></li>
            <li class="list-group-item">10.03.2022 <a href="/">Информация об отмене занятий в актированные дни</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {},
  name: 'App',
  data() {
    return {
      events: [],
    }
  },
  mounted() {
    axios
        .get('http://api.malkollm.ru/Events/')
        .then((response) => {
          console.log(response.data)
          this.events = response.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
}
</script>