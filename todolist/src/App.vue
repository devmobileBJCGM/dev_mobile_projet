<template>
  <div id="app" >{{ TODOOooOooOooS }}
    <input type="checkbox" class="toggle-all" v-on:change="allDone()" :change="updateCompleteAll()" v-model="allDoneBool">Check
    <span v-show="allDoneBool">All</span>
    <span v-show="!allDoneBool">None</span>
    <ul class="todo-list">
      <li class="todo" v-for="todo in filteredTodos" v-bind:key="todo.id" :class="{completed: todo.completed}" :style="colorStyle(todo.completed)">
        <div class="view">
          <input type="checkbox" v-model="todo.completed" class="toggle" v-on:change="updateComplete(todo)">
          <label >{{ todo.name+" " }}</label>
          <button class="destroy" @click.prevent="deleteTodo(todo)">.</button>
        </div>
      </li>
    </ul>
  </div>
  <div>
      <label for="task">tache : </label>
      <input type="text" name="task" v-model="task">
      <button @click.prevent="addTask()">Ajouter une tache</button>
  </div>

   <footer class="footer" v-show="hasTodos">
       <span class="todo-count"><strong>{{ remaining }}</strong> taches à faire</span>
       <ul class="filters">
           <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
           <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a></li>
           <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
       </ul>
       <button class="clear-completed" v-show="complete" @click.prevent="deleteCompleted">Supprimer les taches finies</button>
   </footer>
</template>

<script>
export default {
        name: 'App',
        components: {
        },
        data() {
            return {
                todos: [
                    {
                        id: 1,
                        name: 'tache 1',
                        completed: true
                    },
                    {
                        id: 2,
                        name: 'tache 2',
                        completed: false
                    },
                    {
                        id: 3,
                        name: 'tache 3',
                        completed: false
                    },
                    {
                        id: 4,
                        name: 'tache 4',
                        completed: true
                    }
                ],
                newTodo: '',
                filter: 'all',
                complete: true,
                allDoneBool: true,
                task: ''
            }
        },
        methods: {
            deleteTodo(todo) {
                var index = this.todos.indexOf(todo);
                this.todos.splice(index, 1);
            },
            deleteCompleted() {
                this.todos.filter(todo => todo.completed).forEach(todo => this.deleteTodo(todo));
                this.complete = false;
            },
            allDone() {
                this.todos.forEach(todo => todo.completed = this.allDoneBool);
            },
            updateComplete(todo) {
                if (todo.completed)
                    this.complete = true;
                else this.complete = this.todos.filter(t => t.completed).length != 0;
            },
            colorStyle(bool) {
                return [ bool ? "color:green" : "color:red"];
            },
            updateCompleteAll() {
                this.todos.forEach(todo => {
                    if (todo.completed) {
                        this.complete = true;
                    }
                });
            },
            addTask() {
                if(this.task != ''){
                    this.todos.push( 
                    {
                        id: this.todos.length+1,
                        name: this.task,
                        completed: false
                    }); 
                    console.log(this.task);  
                }
                console.log(this.todos.length); 
                       
            }
        },
        computed: {
            remaining() {
                return this.todos.filter(todo => !todo.completed).length;
            },
            filteredTodos() {
                if (this.filter === 'todo') {
                    return this.todos.filter(todo => !todo.completed)
                } else if (this.filter === 'done') {
                    return this.todos.filter(todo => todo.completed)
                }
                return this.todos
            },
            hasTodos() {
                return true;
            }
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
}
</style>
