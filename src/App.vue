<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
 
}
</script>

<style>
a{
  text-decoration: none;
}
ul li {
  list-style:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;

}
</style>
