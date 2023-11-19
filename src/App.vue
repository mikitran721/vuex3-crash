<template>
  <div id="app">
    <NavbarApp />
    <TodosApp />
  </div>
</template>

<script>
import NavbarApp from './components/Navbar.vue';
import TodosApp from './components/Todos.vue';

export default {
  name: 'App',
  components:{TodosApp, NavbarApp}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(219,219,219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
