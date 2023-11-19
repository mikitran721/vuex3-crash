<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li v-if="auth.isAuthenticated">
            Total todos: {{ todos.length }}
            <button>Logout</button>
        </li>
        <li v-else><button>Login</button></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'NavbarApp',
    computed:mapState(['todos','auth'])
    /* computed:{
        totalTodos(){
            return this.$store.state.todos.length;
        }
    } */
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