<template>
    <h1>Bienvenue dans la list des Todos</h1>
    <div id="Todo" >
        <div id="List_todo">
            <ul>
                <li v-for="elem_list_todo in list_todos" :key="elem_list_todo.id"  v-on:click="selectTodoList(elem_list_todo)">
                    <todolist :id="elem_list_todo.id" :completed="elem_list_todo.completed" :name="elem_list_todo.name"></todolist>
                    <button @click.prevent="deleteTodo(elem_list_todo)">.</button>
                </li>
            </ul>
            <label for="newTodoListName">Todo liste : </label>
            <input type="text" name="newTodoListName" v-model="newTodoListName">
            <button @click.prevent="createTodoList">Add New Todo liste</button>
        </div>
        <div id="List_task">
            <ul>
                <li v-for="todo in filteredTodos" :key="todo.id" :style="colorStyle(todo.completed)">
                    <div>
                        <input type="checkbox" v-model="todo.completed" >
                        <button @click.prevent="deleteTodoElement(filteredTodos,todo)">.</button>
                        <listask :id="todo.id" :completed="todo.completed" :task="todo.name"></listask>
                    </div>
                </li>
            </ul>
            <div v-if="this.idTodoSelected != -1">
                <label for="newTodoName">Todo : </label>
                <input type="text" name="newTodoName" v-model="newTodoName">
                <button @click.prevent="createTodo(this.idTodoSelected)">Add New Todo</button>
            </div>
        </div>
    </div>
</template>

<script>
import todolist from '@/components/sidebar.vue';
import listask from '@/components/sidebaritem.vue';
export default {
        name: 'Todo',
        components: {
            todolist,
            listask
        },
        data() {
            return {
                idTodoSelected: 1,
                newTodoListName: '',
                newTodoName: '',
                list_todos: [
                    {
                        id: 1,
                        name: 'List de quentin',
                        completed: true,
                        todos: [
                            {
                                id: 1,
                                name: 'je',
                                completed: true
                            },
                            {
                                id: 2,
                                name: 'suis',
                                completed: false
                            },
                            {
                                id: 3,
                                name: 'une',
                                completed: false
                            },
                            {
                                id: 4,
                                name: 'tache',
                                completed: true
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'list de paul',
                        completed: false,
                        todos: [
                            {
                                id: 1,
                                name: 'moi',
                                completed: true
                            },
                            {
                                id: 2,
                                name: 'jen',
                                completed: false
                            },
                            {
                                id: 3,
                                name: 'suis',
                                completed: false
                            },
                            {
                                id: 4,
                                name: 'une autre',
                                completed: true
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: 'list de paul 2, le quel ?',
                        completed: false,
                        todos: [
                            {
                                id: 1,
                                name: 'ah oui',
                                completed: true
                            },
                            {
                                id: 2,
                                name: 'bas',
                                completed: false
                            },
                            {
                                id: 3,
                                name: 'moi',
                                completed: false
                            },
                            {
                                id: 4,
                                name: 'aussi',
                                completed: true
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: 'LA petite list à hugo',
                        completed: true,
                        todos: [
                            {
                                id: 1,
                                name: 'aba',
                                completed: true
                            },
                            {
                                id: 2,
                                name: 'daccord',
                                completed: false
                            },
                            {
                                id: 3,
                                name: 'on garde',
                                completed: false
                            },
                            {
                                id: 4,
                                name: 'espoir',
                                completed: true
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            selectTodoList(elem){
                this.idTodoSelected = this.list_todos.indexOf(elem);
            },
            deleteTodo(elem){
                let index = this.list_todos.indexOf(elem);
                this.list_todos.splice(index, 1);
                this.idTodoSelected = -1;
            },
            deleteTodoElement(list,elem){
                let index = list.indexOf(elem);
                list.splice(index, 1);
            },
            createTodoList(){
                if(this.newTodoListName != ''){
                    this.list_todos.push( 
                    {
                        id: this.list_todos.length+1,
                        name: this.newTodoListName,
                        completed: false,
                        todos: [] 
                    });
                    this.newTodoListName ='';
                }
            },
            createTodo(id){
                if(this.newTodoName != ''){
                    this.list_todos[id]["todos"].push( 
                    {
                        id: this.list_todos[id]["todos"].length+1,
                        name: this.newTodoName,
                        completed: false,
                    });  
                    this.newTodoName = '';
                }
            },
            colorStyle(bool) {
                return [ bool ? "color:green" : "color:red"];
            }
        },
        computed: {
            filteredTodos() {
                if (this.idTodoSelected != -1) {
                    return this.list_todos[this.idTodoSelected]["todos"];
                }
                return [];
            }
        }
    }
</script>

<style>
#Todo {width: 70%; margin: 0 auto;display:grid; grid-template-columns: 1fr 1fr;}
#List_todo ul li{padding: 5px; margin:2px; border: 1px solid black; padding: 3px; border-radius: 3px;}
#List_todo ul li:hover {background: linear-gradient(#e8e8e8 , #f1f1f1 , #e8e8e8 );}
#List_task ul li{text-align: left;}
#List_task input{margin-right: 30px}
#List_todo {padding-right: 20px;}
#List_task {border-left: 3px solid black}

</style>
