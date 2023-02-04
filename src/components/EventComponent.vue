<template>
  <div class="container text-center body-font box-mb">
    <div class="row">
      <div class="col-8">
        <div class="container" style="max-width: 850px">
          <div class="box-title box-mb">Новости</div>
          <div class="row" style="display: flex; flex-flow: row wrap; gap: 2px; justify-content: space-between;">
            <div class="col" v-for="event in events" :key="event.id"
                 style="border:1px solid #8c939d; border-radius: 10px; flex: 0 0 22%; margin-bottom: 10px;">
              <div style="height: 4rem;">{{ event.title }}</div>
              <div><img :src="event.files[0]?.downloadUrl" class="card-img-top mt-2" alt="..."></div>
            </div>
          </div>
        </div>
        <div class="box-title box-mb box-mt">Услуги</div>
        <div class="container">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button box-services" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
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
                <button class="accordion-button collapsed box-services" type="button" data-bs-toggle="collapse"
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
                <button class="accordion-button collapsed box-services" type="button" data-bs-toggle="collapse"
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
      </div>
      <div class="col-4">
        <aside-component/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AsideComponent from "@/components/AsideComponent";

export default {
  components: {AsideComponent},
  name: 'App',
  data() {
    return {
      events: [],
    }
  },
  mounted() {
    axios
        .get('http://api.malkollm.ru/Events/GetPartEvents?count=8')
        // .get('https://localhost:7276/Events')
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