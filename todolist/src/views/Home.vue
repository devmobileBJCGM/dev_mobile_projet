<template>
    <h1>Bienvenue dans la list des Todos</h1>
    <button @click.prevent="submit_getUserData">Charger vos données</button>
    <p v-if="!connected">Vous devez vous connecter</p>
    <p v-if="connected ">Bonjour {{user}}</p>
    <div id="Todo" >
        <div id="List_todo">
            <ul>
                <li v-for="elem_list_todo in getTodolist" :key="elem_list_todo.id"  v-on:click="selectTodoList(elem_list_todo.id)">
                    <todolist :id="elem_list_todo.id" :completed="elem_list_todo.completed" :name="elem_list_todo.name"></todolist>
                    <button @click.prevent="deleteTodolist(elem_list_todo.id)">.</button>
                </li>
            </ul>
            <label for="newTodoListName">Todo liste : </label>
            <input type="text" name="newTodoListName" v-model="newTodoListName">
            <button @click.prevent="createTodoList">Add New Todo liste</button>
        </div>
        <div id="List_task">
            <ul>
                <li v-for="todo in getTodotask" :key="todo.id" :style="colorStyle(todo.completed)">
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
import { mapActions, mapGetters } from "vuex";

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
                currentUser: '',
                currentListTask: [],
            }
        },
        methods: {
            ...mapActions("todolist",['getUser','getUserTodolist','getUserTodoInTodolist','creatUserTodolist','deleteUserTodolist','creatUserTodoInTodolist']),
            submit_getUserData(){
                if (this.connected) {
                    this.getUser({"token":this.getUserToken});
                    this.getUserTodolist({"token":this.getUserToken});
                }
            },
            selectTodoList(elem){
                this.idTodoSelected = elem;
                console.log(this.idTodoSelected);
                this.getUserTodoInTodolist({"id":this.idTodoSelected,"token":this.getUserToken});
            },
            createTodoList(){
                if(this.newTodoListName != ''){
                    this.creatUserTodolist({"name":this.newTodoListName,"token":this.getUserToken});
                    this.newTodoListName = '';
                }
            },
            deleteTodolist(id){
                this.deleteUserTodolist({"id":id,"token":this.getUserToken});
                this.idTodoSelected = -1;
            },
            createTodo(){
                if(this.newTodoName != ''){
                    this.creatUserTodoInTodolist({"name":this.newTodoName,"completed":0,"todolistid":this.idTodoSelected,"token":this.getUserToken});
                    this.newTodoName = '';
                }
            },
            deleteTodoElement(list,elem){
                let index = list.indexOf(elem);
                list.splice(index, 1);
            },
            colorStyle(bool) {
                return [ bool ? "color:green" : "color:red"];
            }
        },
        computed: {
            ...mapGetters("account",['getAccountToken']),
            ...mapGetters("todolist",['getAccountUserName','getAccountTodolist','getAccountTodolistTask']),
            connected(){
                return this.getAccountToken.length > 0 ? true : false;
            },
            getUserToken(){
                return this.getAccountToken;
            },
            user(){
                return this.getAccountUserName;
            },
            getTodolist(){
                return this.getAccountTodolist;
            },
            filteredTodos() {
                if (this.idTodoSelected != -1) {
                    return this.list_todos[this.idTodoSelected]["todos"];
                }
                return [];
            },
            getTodotask(){
                console.log(this.getAccountTodolistTask);
                return this.getAccountTodolistTask;
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
