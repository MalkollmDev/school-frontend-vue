<template>
  <header-component/>
  <div class="grid gap-2">
    <div class="container">
      <h3>Новости</h3>

      <div class="container" style="max-width: 850px">
        <a href="" class="text-right">Посмотреть все новости</a>
        <div style="display: flex; flex-flow: row wrap; gap: 2px; justify-content: space-between;">
          <div v-for="event in events" :key="event.id" style="border:1px solid #8c939d; border-radius: 10px; flex: 0 1 17%; margin-bottom: 10px;">
            <div style="height: 4rem;">{{ event.title }}</div>
          <div><img src="../assets/carousel/img_1.png" class="card-img-top mt-2" alt="..."></div>
          </div>
        </div>
      </div>

<!--      Carousel-->
<!--            <div class="row mb-3">-->
<!--              <div class="col-2"></div>-->
<!--              <div class="card mb-3 col-8" style="max-width: max-content;">-->
<!--                <div id="carouselExampleIndicators" class="carousel slide">-->
<!--                  <div class="carousel-indicators">-->
<!--                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"-->
<!--                            aria-current="true" aria-label="Slide 1"></button>-->
<!--                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"-->
<!--                            aria-label="Slide 2"></button>-->
<!--                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"-->
<!--                            aria-label="Slide 3"></button>-->
<!--                  </div>-->
<!--                  <div class="carousel-inner" style="height: 400px;">-->
<!--                    <div class="carousel-item active">-->
<!--                      <img src="../assets/carousel/img.png" class="d-block w-100" alt="..." style="object-fit: fill;">-->
<!--                    </div>-->
<!--                    <div class="carousel-item">-->
<!--                      <img src="../assets/carousel/img2.png" class="d-block w-100" alt="..." style="object-fit: fill;">-->
<!--                    </div>-->
<!--                    <div class="carousel-item">-->
<!--                      <img src="../assets/logo.png" class="d-block w-100" alt="..." style="object-fit: fill;">-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"-->
<!--                          data-bs-slide="prev">-->
<!--                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--                    <span class="visually-hidden">Previous</span>-->
<!--                  </button>-->
<!--                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"-->
<!--                          data-bs-slide="next">-->
<!--                    <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--                    <span class="visually-hidden">Next</span>-->
<!--                  </button>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-2"></div>-->
<!--            </div>-->
    </div>
  </div>
  <footer-component/>
</template>

<script>
import axios from 'axios'
import HeaderComponent from './static/HeaderComponent'
import FooterComponent from "@/components/static/FooterComponent";

export default {
  components: {FooterComponent, HeaderComponent},
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