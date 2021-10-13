<template>
  <div class="containerHome">
    <Title text="Welcome to practice Vue" />
    <p>
      On this page we will see a form using v-model. To access it please go to
      the browser and click <strong> form </strong>. You can also go to
      <strong> blog </strong> where you can access many articles through the
      consumption of an api and finally our counter, practicing vuex. To see
      click <strong> count </strong>
    </p>
    <img
      src="https://victorroblesweb.es/wp-content/uploads/2017/03/vuejs2-victorroblesweb.jpg"
      alt=""
    />
  </div>
</template>

<script>
import Title from "../components/Title.vue";
export default {
  components: {
    Title,
  },
};
</script>

<style scoped>
.containerHome {
  max-width: 1107px;
  max-height: 600px;
  background-color: #eff4f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 290px;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
p {
  max-width: 1000px;
  height: auto;
  margin-top: 30px;
  font-size: 20px;
}
img {
  max-width: 600px;
  max-height: 500px;
  margin-bottom: 40px;
  border-radius: 5px;
}
</style>