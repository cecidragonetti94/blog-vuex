<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#Id</th>
        <th scope="col">Name</th>
        <th scope="col">Categories</th>
        <th scope="col">Status</th>
        <th scope="col">Number</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tasks" :key="item.id">
        <td scope="row">{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>
          <span v-for="(cat, index) in item.categories" :key="index">
            {{ item.categories.join(', ') }}
          </span>
        </td>
        <td>{{ item.status }}</td>
        <td>{{ item.number }}</td>
        <td>
            <button class="button-delite" @click="deleteTask(item.id)" > Delete </button>
           <router-link class="router-link-button" :to="{name:'Edit', params:{id: item.id}}">Edit</router-link>
             </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["tasks"]),
  },
  methods:{
      ...mapActions(['deleteTask'])
  }
};
</script>
<style scoped>
table,
th,
td {
  border: 1px solid white;
}
table {
  width: 100%;
}
td {
  font-weight: lighter;
}
th {
  background-color: #42b983;
  color: white;
}
tr:nth-child(even) {
  background-color: white;
}

</style>

