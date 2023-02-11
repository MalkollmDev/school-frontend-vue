<template>
  <div class="container text-center body-font box-mb">
    <div class="row">
      <div class="col-8">
        <div class="container" style="max-width: 850px">
          <div class="box-title box-mb">Новости</div>
          <div class="row" style="display: flex; flex-flow: row wrap; gap: 2px; justify-content: space-between;">
            <div class="col p-2" v-for="event in events" :key="event.id"
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
                <button class="accordion-button box-services" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                  Академическая часть
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                   data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul style="text-align: left">
                    <li>Гибкая система обучения</li>
                    <li>Каждый ребёнок сам выбирает дополнительные дисциплины</li>
                    <li>Изучаемый иностранный язык - английский</li>
                    <li>Небольшие классы до 12 человек</li>
                    <li>Развивающие и творческие занятия</li>
                    <li>2 академических часа в день уделяется творческому развитию детей</li>
                    <li>Каждый день познавательные прогулки и еженедельные выездные экскурсии</li>
                    <li>Домашнее задание ребенок делает в школе</li>
                    <li>В течение года наставник-тьютор сопровождает ребёнка и помогает добиться академических успехов,
                      а на протяжении всего дня за классом присматривает педагог-организатор
                    </li>
                    <li>Полезное и вкусное питание 3 раза в день, составленное диетологом</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed box-services" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                  Клуб юных химиков
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne"
                   data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Приглашаем ваших детей в клуб юных химиков «ГЕНИУМ»</p>
                  <span>Каждую субботу с 13:00 до 14:00 дети могут почувствовать себя учеными, делающими открытия!</span><br><br>
                  <span>Дети вместе с педагогом проведут увлекательные, яркие и захватывающие эксперименты. У нас в программе
                  много научных тем, которые будут интересны вашим детям!</span><br>
                  <span>Мы предоставляем все необходимое для занятий: лабораторную посуду, химические реактивы, униформу и
                  средства индивидуальной защиты.</span><br>
                  <p>Цена занятий в месяц 2400₽</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed box-services" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  Подготовка к школе
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                   data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>По субботам с 9:00-11:00 мы проводим занятия, направленные на развитие:</p>
                  <ul style="text-align: left">
                    <li>чтения</li>
                    <li>логического мышления</li>
                    <li>графо-моторных навыков</li>
                    <li>занимаемся творчеством</li>
                    <li>расширяем кругозор</li>
                    <li>развиваем речь</li>
                  </ul>
                  <span>Стоимость месяца занятий - 5000₽</span>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed box-services" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Продленка
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingThree"
                   data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>С понедельника по пятницу в нашей школе проходит <strong>продлёнка</strong></p>
                  <span>Время 14:00-18:30. На продлёнке дети:</span>
                  <ul style="text-align: left">
                    <li>ежедневно выполняют домашнее задание</li>
                    <li>2 раза в неделю посещают занятие физической активности</li>
                    <li>1 раз в неделю занимаются в "Творческой мастерской"</li>
                    <li>1 раз в неделю посещают музыкальное занятие</li>
                    <li>по желанию можно добавить занятия по шахматам и робототехнике</li>
                    <li>ежедневно досуговые занятия ( бисероплетение, бумагопластика, шитье, игровая деятельность)</li>
                  </ul>
                  <span>Продленка в нашей школе создана не только для выполнения домашнего задания, но и для расширение
                  кругозора ваших детей.</span>
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
        // .get('http://api.malkollm.ru/Events/GetPartEvents?count=8')
        .get('http://api.malkollm.ru/Events')
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