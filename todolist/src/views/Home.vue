<template>
    <h1>Bienvenue dans la list des Todos</h1>
    <div id="Todo" >
        <ul>
            <li v-for="elem_list_todo in list_todos" :key="elem_list_todo.id">
                <todolist :id="elem_list_todo.id" :completed="elem_list_todo.completed" :name="elem_list_todo.name"></todolist>
            </li>
        </ul>
    </div>
</template>

<script>
import todolist from '@/components/sidebar.vue';
export default {
        name: 'Todo',
        components: {
            todolist
        },
        data() {
            return {
                list_todos: [
                    {
                        id: 1,
                        name: 'List de quentin',
                        completed: true
                    },
                    {
                        id: 2,
                        name: 'list de paul',
                        completed: false
                    },
                    {
                        id: 3,
                        name: 'list de paul 2, le quel ?',
                        completed: false
                    },
                    {
                        id: 4,
                        name: 'LA petite list à hugo',
                        completed: true
                    }
                ]
            }
        },
        methods: {
        },
        computed: {
        }
    }
</script>

<style>
#Todo {width: 60%; margin: 0 auto;}
</style>
