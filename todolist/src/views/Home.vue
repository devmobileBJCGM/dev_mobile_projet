<template>
    <h1>Todolist</h1>
    <button @click.prevent="submit_getUserData">Recharger vos données</button>
    <p v-if="!connected">Vous devez vous connecter</p>
    <p v-if="connected ">Vous êtes connecté {{user}}.</p>
    <div id="Todo" >
        <div id="List_todo">
            <ul>
                <li v-for="elem_list_todo in getTodolist" :key="elem_list_todo.id"  >
                    <todolist class="todo" :id="elem_list_todo.id" :name="elem_list_todo.name" v-on:click="selectTodoList(elem_list_todo.id)"></todolist>
                    <button @click.prevent="deleteTodolist(elem_list_todo.id)">.</button>
                </li>
            </ul>
            <label for="newTodoListName">Liste : </label>
            <input type="text" name="newTodoListName" v-model="newTodoListName">
            <button @click.prevent="createTodoList">Ajouter une liste</button>
        </div>
        <div id="List_task">
            <div id="filters">
                <a id="filter1" href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a>
                <a id="filter2" href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a>
                <a id="filter3" href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a>
            </div>
            <br>
            <input type="checkbox" v-on:change="allDone()" v-model="allDoneBool">
            <span id="toggle_all" v-show="allDoneBool"> Tout déselectionner</span>
            <span id="toggle_all" v-show="!allDoneBool"> Tout sélectionner</span>
            <span id="tache_a_faire"><strong>{{remaining}}</strong> tâches à faire</span>
            <ul>
                <li v-for="todo in filteredTodos" :key="todo.id" :style="colorStyle(todo.completed)">
                    <div>
                        <input type="checkbox" v-model="todo.completed" v-on:click="changeBool(todo)">
                        <button @click.prevent="deleteTodoElement(todo.id)">.</button>
                        <input type="text" name="modifyTodoName" v-model="modifyTodoName">
                        <button @click.prevent="modifyTodoNameAction(todo)">Modifier tâche</button>
                        <listask :id="todo.id" :completed="todo.completed==1?true:false" :task="todo.name"></listask>
                    </div>
                </li>
            </ul>
            <div v-if="this.idTodoSelected != -1">
                <label for="newTodoName">Tâche : </label>
                <input type="text" name="newTodoName" v-model="newTodoName">
                <button @click.prevent="createTodo(this.idTodoSelected)">Ajouter nouvelle tâche</button>
            </div>
            <br>
            <button @click.prevent="deleteCompleted">Supprimer les taches finies</button>
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
                modifyTodoName: '',
                allDoneBool:false,
                filter:'all'
            }
        },
        methods: {
            ...mapActions("todolist",['getUser','getUserTodolist','getUserTodoInTodolist','creatUserTodolist','deleteUserTodolist','creatUserTodoInTodolist','deleteUserTodoInTodolist','changeCompleteTodoInTodolist','modifyTodoInTodolist']),
            submit_getUserData(){
                if (this.connected) {
                    this.getUser({"token":this.getUserToken});
                    this.getUserTodolist({"token":this.getUserToken});
                    this.getUserTodoInTodolist({"id":this.idTodoSelected,"token":this.getUserToken});
                }
            },
            selectTodoList(elem){
                this.idTodoSelected = elem;
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
            deleteTodoElement(id){
                this.deleteUserTodoInTodolist({"id":id,"token":this.getUserToken});
            },
            colorStyle(bool) {
                return bool ? "color:green" : "color:red";
            },
            changeBool(todo){
                todo.completed = todo.completed? false:true;
                this.changeCompleteTodoInTodolist({"id":todo.id,"name":todo.name,"completed":todo.completed?1:0,"todolistid":this.idTodoSelected,"token":this.getUserToken});
            },
            modifyTodoNameAction(todo){
                this.modifyTodoInTodolist({"id":todo.id,"name":this.modifyTodoName,"completed":todo.completed?1:0,"todolistid":this.idTodoSelected,"token":this.getUserToken});
                this.modifyTodoName='';
            },
            allDone(){
                this.getTodotask.forEach(todo => todo.completed = this.allDoneBool);
            },
            deleteCompleted(){
                this.getTodotask.filter(todo => todo.completed).forEach(todo => this.deleteTodoElement(todo.id));
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
                    if (this.filter === 'todo') {
                        return this.getTodotask.filter(todo => !todo.completed)
                    } else if (this.filter === 'done') {
                        return this.getTodotask.filter(todo => todo.completed)
                    }
                    return this.getTodotask;
                }
                return [];
            },
            getTodotask(){
                return this.getAccountTodolistTask;
            },
            iscompleted(todo){
                return todo.completed==1?true:false;
            },
            remaining() {
                return this.getTodotask.filter(todo => !todo.completed).length;
            }
        }
    }
</script>

<style>
.todo {padding: 5px; margin:2px; border: 1px solid black; padding: 7px; padding-left: 30px;padding-right: 30px; border-radius: 3px;}
.todo:hover {background: linear-gradient(#e8e8e8 , #f1f1f1 , #e8e8e8 );}
#Todo {width: 70%; margin: 0 auto;display:grid; grid-template-columns: 1fr 1fr;}
#List_todo ul li{margin:10px;}
#List_task ul li{text-align: left;}
#List_task input{margin-right: 30px}
#List_todo {padding-right: 20px;}
#List_task {border-left: 3px solid black}
#List_todo input{
    margin-right: 30px;
}
#toggle_all{
    padding-right: 10px;
}
#tache_a_faire{
    padding-left: 10px;
    border-left: 1px solid black;
}
#filter1{
    padding-right: 10px;
    border-right: 1px solid black;
}
#filter2{
    padding-right: 10px;
    padding-left: 10px;
    border-right: 1px solid black;
}
#filter3{
    padding-left: 10px;
}


</style>
