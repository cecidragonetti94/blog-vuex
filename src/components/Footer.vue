<template>
  <footer>
    <h3>&copy; Cecilia Dragonetti - {{ year }}</h3>
  </footer>
</template>
<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
H3{
    background-color:  #2c3e50;
padding: 1rem;
text-align: center;
color:snow;

}
footer{
 max-height: 30px;
 box-shadow: 0px -6px 5px 0px rgba(159,148,148,0.75);
-webkit-box-shadow: 0px -6px 5px 0px rgba(159,148,148,0.75);
-moz-box-shadow: 0px -6px 5px 0px rgba(159,148,148,0.75);

}


</style>