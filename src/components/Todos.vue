<template>
  <div class="todo-list">
    <ul v-if="auth.isAuthenticated">
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.title }}
        </li>
    </ul>
    <p v-else style="text-align: center;">Not authorized</p>
  </div>
</template>

<script>
//helpers
import { mapState } from 'vuex';

export default {
    name:'TodosApp',
    //viet tat
    computed:mapState(['todos','auth']) //lay duoc 1 cap
    /* 
    //viet day du
    computed:mapState({
        todos:state=>state.todos,
        isAuthenticated:state=>state.auth.isAuthenticated
    }) */
    
    /*computed:{
        //xao nau data
        todos(){
            return this.$store.state.todos;
        }
        ,isAuthenticated(){
            return this.$store.state.auth.isAuthenticated;
        }
    } */
    //trang thai khoi diem ~ ref() cua vue3
    /* data(){
        return{
            todos:[
                {id:1,title:'Viec 1',completed:false},
                {id:2,title:'Viec 2',completed:false},
                {id:3,title:'Viec 3',completed:true},
            ]
        }
    } */
}
</script>

<style>
.todo-list ul{
    padding: 0 10px 10px 10px;
    list-style-type: none;
}

.todo-list li{
    padding: 10px;
    cursor: pointer;
    margin: 10px 0;
    border-radius: 4px;
    background: rgb(240,240,240);
    color: #000;
}
</style>