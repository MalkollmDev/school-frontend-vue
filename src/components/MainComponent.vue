<template>
  <header-component/>
  <event-component />

  <div class="statistic-box box-mb">
    <div class="box-title box-mb">Школа в цифрах</div>
    <div class="statistic-list">
      <div class="statistic-item">
        <div class="statistic-item-numb benefits__number">53</div>
        Очная форма обучения
      </div>
      <div class="statistic-item">
        <div class="statistic-item-numb benefits__number" style="color: #4b74c8">6</div>
        Классов
      </div>
      <div class="statistic-item">
        <div class="statistic-item-numb benefits__number" style="color: #3cb07c;">6</div>
        Дополнительных курсов
      </div>
      <div class="statistic-item">
        <div class="statistic-item-numb benefits__number" style="color: #8bc34a;">12</div>
        Учителей
      </div>
      <div class="statistic-item">
        <div class="statistic-item-numb benefits__number">53</div>
        Довольных учеников
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
  <!--    </div>-->
  <!--  </div>-->
  <footer-component/>
</template>

<script>
import HeaderComponent from './static/HeaderComponent'
import EventComponent from './EventComponent'
import FooterComponent from "@/components/static/FooterComponent";

export default {
  components: {FooterComponent, EventComponent, HeaderComponent},
  name: 'App',
  data() {
  },
}
</script>

<style>
.statistic-box {
  margin: 130px 0;
}

.box-mt {
  margin-top: 58px;
}

.box-mb {
  margin-bottom: 58px;
}

.box-services {
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
}

.box-title {
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 100%;
  color: #000000;
}

.statistic-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 180px;
  padding-left: 180px;
}

.statistic-item {
  font-weight: 500;
  font-size: 18px;
  line-height: 124%;
  color: #000;
  margin-bottom: 40px;
  min-width: 140px;
}

.statistic-item-numb {
  font-weight: 600;
  font-size: 62px;
  line-height: 124%;
  color: #43bbcd;
}
</style>