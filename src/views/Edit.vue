<template>
  <div class="router-link-button">Edit {{ $route.params.id }}-- {{task}}</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
computed:{
    ...mapState(['task'])
},
methods:{
    ...mapActions(['setingTask'])
},
created(){
    this.setingTask(this.$route.params.id )
}
}
</script>

<style>
.router-link-button {
  margin-left: 2px;
  text-decoration: none;
  border: 2px solid yellow;
  color: teal;
  border-radius: 5px;
  background-color: yellow;
}
</style>