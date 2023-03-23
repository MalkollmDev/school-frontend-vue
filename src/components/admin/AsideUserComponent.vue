<template>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <h5>Список пользователей</h5>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Логин</th>
        <th scope="col">Пароль</th>
        <th scope="col">Тип пользователя</th>
        <th scope="col">ФИО</th>
        <th scope="col">Номер класса</th>
        <th scope="col">Номер телефона</th>
        <th scope="col">Email</th>
      </tr>
      </thead>

      <tbody v-for="user in users" :key="user.id">
      <tr colspan="2">
        <td>{{ user.login }}</td>
        <td>{{ user.password }}</td>
        <td>{{ user.roleId }}</td>
        <td>{{ `${user.lastName} ${user.firstName} ${user.middleName}` }}</td>
        <td>{{ user.groupId }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.email }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

import axios from "axios";

export default {
  components: {},
  name: 'AsideUserComponent',
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    axios
        .get('http://api.malkollm.ru/Users')
        .then((response) => {
          console.log(response.data)
          this.users = response.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
}
</script>