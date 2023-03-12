<template>
  <header-component/>

  <div class="container text-center body-font box-mb">
    <div class="row">
      <div class="container" style="max-width: 850px">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="imageUrl" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title fs-1">{{ title }}</h5>
                <p class="card-text">{{ content }}</p>
                <p class="card-text"><small class="text-muted">{{ datePublished }}</small></p>
              </div>
            </div>
            <div class="container" style="max-width: 850px">
              <div class="row" style="display: flex; flex-flow: row wrap; gap: 2px; justify-content: space-between;">
                <div class="col p-2" v-for="image in images" :key="image.id"
                     style="border:1px solid #8c939d; border-radius: 10px; flex: 0 0 22%; margin-bottom: 10px;">
                    <div><img :src="image.downloadUrl" class="card-img-top mt-2" alt="..."></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';
import HeaderComponent from "@/components/static/HeaderComponent";

export default {
  components: {HeaderComponent},
  name: 'EventDescriptionComponent',
  data() {
    return {
      title: "",
      content: "",
      datePublished: "",
      imageUrl: "",
      images: [],
      id: this.$route.query.id
    }
  },
  mounted() {
    console.log()
    axios
        .get('http://api.malkollm.ru/Events/'+this.id)
        // .get('https://localhost:7276/Events/'+this.id)
        .then((response) => {
          console.log(response.data)
          this.title = response.data.title
          this.content = response.data.content
          this.datePublished = this.format_date(response.data.published)
          this.images = response.data.files
          this.imageUrl = response.data.files[0].downloadUrl
        })
        .catch((error) => {
          console.log(error)
        })
  },
  methods: {
    format_date(value){
      if (value) {
        return moment(String(value)).format('DD-MM-YYYY hh:mm')
      }
    },
  }
}
</script>


