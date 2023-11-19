<template>
  <div class="todo-list">
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.title }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'TodosApp',
    //trang thai khoi diem ~ ref() cua vue3
    data(){
        return{
            todos:[
                {id:1,title:'Viec 1',completed:false},
                {id:2,title:'Viec 2',completed:false},
                {id:3,title:'Viec 3',completed:true},
            ]
        }
    }
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