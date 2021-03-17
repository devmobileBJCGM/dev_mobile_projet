<template>
    <h1>Bienvenue dans la list des Todos</h1>
    <div id="Todo" >
        <div id="List_todo">
            <ul>
                <li v-for="elem_list_todo in list_todos" :key="elem_list_todo.id">
                    <todolist v-on:click="showListTask(elem_list_todo.id)" :id="elem_list_todo.id" :completed="elem_list_todo.completed" :name="elem_list_todo.name"></todolist>
                </li>
            </ul>
        </div>
        <div id="List_task">
            <ul>
                <li v-for="todo in filteredTodos" :key="todo.id">
                    <listask :id="todo.id" :completed="todo.completed" :task="todo.name"></listask>
                </li>
            </ul>
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
                idselected: 1,
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
            switchShowText(){
                this.showText = this.showText?false:true;
            },
            showListTask(id){
                this.idselected = id;
            }
        },
        computed: {
            filteredTodos() {
                let listTodoTask = []
                this.list_todos.forEach(element => {
                    if (element["id"]==this.idselected) {
                        listTodoTask=element["todos"];
                    }
                });
                return listTodoTask;
            }
        }
    }
</script>

<style>
#Todo {width: 60%; margin: 0 auto;display:grid; grid-template-columns: 1fr 2fr;}
#List_todo ul li{padding: 5px; margin:2px; border: 1px solid black; padding: 3px; border-radius: 3px;}

</style>
