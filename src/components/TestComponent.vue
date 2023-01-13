<template>
    <div>
        <h1>Test</h1>
        <button @click="getPosts" class="btn btn-secondary">Получить посты</button>
        <!-- <div v-for="post in posts" :key="post.id">
            <h3>{{ post.id }}. {{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <hr />
        </div> -->
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
        getPosts(){
            axios
            .get('http://api.malkollm.ru/News/')
            .then((response) => {
                console.log(response.data)
                // this.posts = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
  }
  </script>