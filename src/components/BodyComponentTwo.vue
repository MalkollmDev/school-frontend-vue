<template>
    <div class="grid gap-3">
      <div class="container">
        <h3>TEST</h3>
        <div v-for="post in posts" :key="post.id">
          <div class="row">
            <div class="card p-2 g-col-6 m-3" style="width: 18rem;">
              <img src="../assets/img.png" class="card-img-top" alt="..." height="270px">
              <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.text }}</p>
                <a href="#" class="btn btn-primary">Перейти</a>
                <p class="card-text"><small class="text-muted">{{ post.published }}</small></p>
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
  mounted() {
    axios
        .get('http://api.malkollm.ru/News/')
        .then((response) => {
          console.log(response.data)
          this.posts = response.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
}
</script>