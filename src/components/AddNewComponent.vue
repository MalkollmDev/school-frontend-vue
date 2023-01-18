<template>
  <header-component/>
  <h3 class="m">Добавить новость</h3>
  <div class="container w-25 p-3">
    <form>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Заголовок новости</label>
      </div>
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Описание новости</label>
      </div>
      <div class="m-4">
        <label for="formFile" class="form-label">Изображение новости</label>
        <input class="form-control" type="file" id="formFile">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  <footer-component/>
</template>

<script>
import HeaderComponent from './static/HeaderComponent'
import FooterComponent from "@/components/static/FooterComponent";

export default {
  components: {FooterComponent, HeaderComponent},
  name: 'App',
  data() {
    return {
      posts: [],
    }
  },
}
</script>