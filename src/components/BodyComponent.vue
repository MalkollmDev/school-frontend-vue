<template>
  <div>
    <!--    <h1>Main</h1>-->
    <!--    <button @click="getPosts" class="btn btn-secondary">Получить посты</button>-->
    <!--    <div v-for="post in posts" :key="post.id">-->
    <!--      <h3>{{ post.id }}. {{ post.title }}</h3>-->
    <!--      <p>{{ post.body }}</p>-->
    <!--      <hr/>-->
    <!--    </div>-->
    <br/>
    <br/>
    <TestComponent />
    <div class="grid gap-3">
      <div class="container">
        <h3>Новости</h3>
        <div class="row">
          <div class="card p-2 g-col-6 m-3" style="width: 18rem;">
            <img src="../assets/img.png" class="card-img-top" alt="..." height="270px">
            <div class="card-body">
              <h5 class="card-title">Открытая встреча 21 декабря (среда) 19:00</h5>
              <p class="card-text">Если вы ждали знак, то вот он!
                Мы уверены, что школа может быть любимой, в школу можно идти с радостью и в школе можно чувствовать себя комфортно...</p>
              <a href="#" class="btn btn-primary">Перейти</a>
            </div>
          </div>
          <div class="card p-2 g-col-6 m-3" style="width: 18rem;">
            <img src="../assets/img_1.png" class="card-img-top" alt="..." height="270px">
            <div class="card-body">
              <h5 class="card-title">Какие ценности у нашей школы?</h5>
              <p class="card-text">- Дети в школе учатся, а дома отдыхают!
                Всю домашнюю работу дети выполняют в школе, чтобы дома отдыхать и проводить вечера в кругу семьи и друзей. Мы не приветствуем выполнение «домашки» до поздней ночи!</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card p-2 g-col-6 m-3" style="width: 18rem;">
            <img src="../assets/1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card p-2 g-col-6 m-3" style="width: 18rem;">
            <img src="../assets/1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    getPosts() {
      axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            console.log(response.data)
            this.posts = response.data
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>