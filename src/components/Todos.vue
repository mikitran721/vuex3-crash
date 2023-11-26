<template>
  <div class="todo-list">
    <TodoForm />
    <ul v-if="isAuthenticated">
        <li :class="todo.completed ? 'completed' :''" v-for="todo in todos" :key="todo.id">
            {{ todo.title }}

            <!-- <input @change="markTodoCompleted(todo.id)" type="checkbox" :checked="todo.completed" /> -->
            <input @change="MARK_COMPLETE(todo.id)" type="checkbox" :checked="todo.completed" />
            <button @click="deleteTodo(todo.id)">Delete</button>
        </li>
    </ul>
    <p v-else style="text-align: center;">Not authorized</p>
  </div>
</template>

<script>
//helpers
import { mapActions, mapGetters, mapMutations} from 'vuex';
import TodoForm from './TodoForm.vue'

export default {
    name:'TodosApp'
    ,components:{TodoForm}
    ,created(){
        this.getTodos();
    }

    //su dung ham-method
    ,methods:{...mapMutations(['MARK_COMPLETE']),
                /* deleteTodo(todoId){
                    //goi action trong store
                    this.$store.dispatch('deleteTodo',todoId)
                } */
                ...mapActions(['deleteTodo','getTodos'])
            }
    /* ,methods:{
        markTodoCompleted(todoId){
            // console.log(todoId)
            //goi mutation
            this.$store.commit('MARK_COMPLETE',todoId)
        }
    } */
    //viet tat
    // ,computed:{...mapState(['todos']),...mapGetters(['todos','isAuthenticated'])} //lay duoc 1 cap
    ,computed:{...mapGetters(['todos','isAuthenticated'])} //lay duoc 1 cap
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

.todo-list li input[type='checkbox']{
    -ms-transform: scale(2); /* IE */
    -moz-transform: scale(2); /* FF */
    -webkit-transform: scale(2); /* safari & chrome */
    -o-transform: scale(2); /* opera */
    transform: scale(2);
    padding: 10px;
    float: right;
}

.todo-list li.completed{
    background: rgb(119,218,243);
}

.todo-list li button{
    float:right;
    margin-right: 20px;
}

.todo-list li button:hover{
    cursor: pointer;
    background: red;
    color: white;
}
</style>