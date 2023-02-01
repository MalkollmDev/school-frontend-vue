<template>
  <header-component/>
  <div class="container text-center body-font">
    <div class="row">
      <div class="col-sm-8">
        <div class="box-title box-m">Новости</div>
        <div class="w-25 p-3 float-left">
          <div class="" v-for="event in events" :key="event.id"
               style="border:1px solid #8c939d; border-radius: 10px;">
            <div style="height: 4rem;">{{ event.title }}</div>
            <div><img src="../assets/carousel/img_1.png" class="card-img-top mt-2" alt="..."></div>
          </div>
        </div>
      </div>
      <div class="col-sm-4 box-m">
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

  <div class="box-title box-mb">Услуги</div>
  <div class="container">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
            Клуб юных химиков
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Приглашаем ваших детей в клуб юных химиков «ГЕНИУМ»
            Каждую субботу с 13:00 до 14:00 дети могут почувствовать себя учеными, делающими открытия!
            Дети вместе с педагогом проведут увлекательные, яркие и захватывающие эксперименты. У нас в программе много
            научных тем, которые будут интересны вашим детям!
            Мы предоставляем все необходимое для занятий: лабораторную посуду, химические реактивы, униформу и средства
            индивидуальной защиты.
            Цена занятий в месяц 2400₽
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Подготовка к школе
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            По субботам с 9:00-11:00 мы проводим занятия, направленные на развитие:
            - чтения
            - логического мышления
            - графо-моторных навыков
            - занимаемся творчеством
            - расширяем кругозор
            - развиваем речь
            Стоимость месяца занятий - 5000₽
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Продленка
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            С понедельника по пятницу в нашей школе проходит продлёнка 📝
            <span>Время 14:00-18:30</span>
            На продлёнке дети
            - ежедневно выполняют домашнее задание
            - 2 раза в неделю посещают занятие физической активности
            - 1 раз в неделю занимаются в "Творческой мастерской"
            - 1 раз в неделю посещают музыкальное занятие
            - по желанию можно добавить занятия по шахматам и робототехнике
            - ежедневно досуговые занятия ( бисероплетение, бумагопластика, шитье, игровая деятельность)
            Продленка в нашей школе создана не только для выполнения домашнего задания, но и для расширение кругозора
            ваших детей.
          </div>
        </div>
      </div>
    </div>
  </div>

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

<style>
.statistic-box {
  margin: 130px 0;
}
.box-m {
  margin: 60px 0;
}
.box-mb {
  margin-bottom: 58px;
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

.body-font {

}
</style>