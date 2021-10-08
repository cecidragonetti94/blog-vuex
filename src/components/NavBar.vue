<template>
  <div class="navBar">
    <router-link to="/">Home</router-link> |
    <router-link to="/form">Form</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/count">Count</router-link> |
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navBar {
  padding: 30px;
  background-color: #2c3e50;
  display: flex;
  justify-content: space-between;
  max-height: 30px;

}


.navBar a {
  font-weight: bold;
  color: #eff4f8;
}

.navBar a.router-link-exact-active {
  color: #42b983;
}
/* @media screen and (max-width: 980px){
  .navBar{
    width: 100%;
    padding: 15px;
    
  }
} */
</style>