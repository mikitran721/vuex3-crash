<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>
    <ul>
        <li>Home</li>
        <li>About</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'NavbarApp'
}
</script>

<style>
    .navbar{
        padding: 5px;
        text-align: center;
        background: rgb(240,240,240);
        color: #000;
    }

    .navbar ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        padding: 0;
    }
</style>