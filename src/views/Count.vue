<template>
  <div class="count">
    <h1 :style="contColor">{{ title }} :{{ cont }}</h1>
    <div class="container-button">
      <button class="buton-incre" @click="actionIncrement">Increment</button>
      <BtnDisminuir />
      <hr />
      <ButonAction :estado="true" />
      <ButonAction :estado="false" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import BtnDisminuir from "../components/BtnDisminuir";
import ButonAction from "../components/ButonAction";
export default {
  name: "Home",
  components: {
    BtnDisminuir,
    ButonAction,
  },
  data: () => ({
    title: "Counter",
  }),
  computed: {
    ...mapState(["cont"]),
    contColor() {
      return [this.cont > 100 ? { color: "rgb(17, 182, 204)" } : { color: "violet" }];
    },
  },

  methods: {
    ...mapMutations(["incrementar"]),
    ...mapActions(["actionIncrement"]),
  },
};
</script>
<style scoped>
.count {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1900px;
  height: 500px;
  background-color: aquamarine;
  border-radius: 10px;
  margin: 200px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
.container-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 45px;
  width: 100%;
}
.buton-incre{
  border-radius: 5px;
    width: 70px;
    border:none;
    font-weight: bold;
    margin-left: 5px;
    background-color: violet;
    color:white;
}
.buton-incre:hover{
    background-color:rgb(17, 182, 204);
    color:white;
    font-weight: bold
}
</style>