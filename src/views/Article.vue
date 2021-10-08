<template>
  <div class="article">
    <Title text="Article" />
    <h2>Path:{{ $route.params.id }}</h2>
   
    <div class="container-article">
      <div class="container-title">
        
        <h2>{{ article.title }}</h2>
      </div>

   
      <p class="p-article">{{ article.body }}</p>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title";
export default {
  components: {
    Title,
  },
  data: () => ({
    article: {},
  }),
  methods: {
    async consumirArticle() {
      try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
        );
        const objeto = await data.json();
        console.log(objeto);
        this.article = objeto;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.consumirArticle();
  },
};
</script>

<style >
.article {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
 height: auto;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.p-article {
  display: flex;
  justify-content: center;
  margin-left: 80px;
}
.container-article {
  background-color: #d9e1e9;
  max-width: 1000px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

</style>