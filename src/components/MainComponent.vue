<template>
    <header-component />
    <div class="grid gap-3">
      <div class="container">
        <h3>Новости</h3>
        <div v-for="event in events" :key="event.id">
          <div class="row">
            <div class="card p-2 g-col-6 m-3" style="width: 18rem;">
              <img src="../assets/img.png" class="card-img-top" alt="..." height="270px">
              <div class="card-body">
                <h5 class="card-title">{{ event.title }}</h5>
                <p class="card-text">{{ event.content }}</p>
                <a href="#" class="btn btn-primary">Перейти</a>
                <p class="card-text"><small class="text-muted">{{ event.published }}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <footer-component />
</template>

<script>
import axios from 'axios'
import HeaderComponent from './static/HeaderComponent'
import FooterComponent from "@/components/static/FooterComponent";

export default {
  components: {FooterComponent, HeaderComponent },
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