<template>
  <Title text="Blog Articles" />
  <div class="containerBlog">
    <hr />

    <p class="click">Click on an article to read it</p>

    <hr />
    <!--<button @click="consumirApi">Consume API</button>-->
    <Loading v-if="load" />
    <div class="container-id">
      <div class="title-id" v-for="item in arrayBlog" :key="item.id">
        <router-link :to="`/blog/${item.id}`"
          >{{ item.id }} - {{ item.title }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Loading from "../components/Loading.vue";
export default {
  components: {
    Title,
    Loading,
  },
  data: () => ({
    arrayBlog: [],
    load: false,
  }),
  methods: {
    async consumirApi() {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const array = await data.json();
        console.log(array);
        this.arrayBlog = array;
        this.load = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.consumirApi();
  },
  mounted() {
    this.load = true;
  },
};
</script>

<style>
.containerBlog {
  display: flex;
  flex-direction: column;
  background-color: #eff4f8;
  height: auto;
}
.click {
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#42b983;
  font-size:20px;
  font-weight: bold;
  background-color: #d6dadd;
}
.title-id {
  margin-top: 10px;
  height: auto;
  
}


</style>