<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li v-if="isAuthenticated">
            Total todos: {{ todos.length }}
            <!-- <button @click="loginOrLogout">Logout</button> -->
            <button @click="TOGGLE_AUTH">Logout</button>
        </li>
        <li v-else>
            <!-- <button @click="loginOrLogout">Login</button> -->
            <button @click="TOGGLE_AUTH">Login</button>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name:'NavbarApp',
    computed:{...mapGetters(['todos','isAuthenticated'])},

    //sung dung helper `mapMutation`
    methods:mapMutations(['TOGGLE_AUTH'])
    /* methods:{
        loginOrLogout(){
            //goi toi mutation de thay doi state
            this.$store.commit('TOGGLE_AUTH')
        }
    } */
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