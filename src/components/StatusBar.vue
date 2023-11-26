<template>
  <div class="status-bar" v-if="isAuthenticated">
    <p>Done</p>
    <ul>
        <!-- <li v-for="todo in todos.filter(todo => todo.completed)" :key="todo.id">{{ todo.title }}</li> -->
        <li v-for="todo in doneTodos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name:'StatusBar'
    // ,computed:mapState(['todos'])
    ,computed:mapGetters(['doneTodos','isAuthenticated'])
    /* ,computed:{
        doneTodos(){
            //return this.$store.state.todos.filter(todo => todo.completed)

            //using getters
            return this.$store.getters.doneTodos
        }
    } */
}
</script>

<style>
    .status-bar{
        padding:5px;
        text-align: center;
        background: rgb(240,240,240);
        color: black;
    }
</style>