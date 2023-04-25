<template>
  <p>{{money.target}}</p>
  <p style="color: #3cb07c">{{money.amount}}</p>
</template>

<script>
import axios from "axios";

export default {
  name: 'MoneyComponent',
  data() {
    return {
      money: ""
    }
  },
  mounted() {
    axios
        .get('http://api.malkollm.ru/Money')
        // .get('https://localhost:7276/Money')
        .then((response) => {
          console.log(response.data)
          this.money = response.data[0]
        })
        .catch((error) => {
          console.log(error)
        })
  },
}
</script>

<style>
/*p {*/
/*  color: red;*/
/*  font-size: 250px;*/
/*}*/
</style>