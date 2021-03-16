<template>
    <div id="sidebar">
        <label>{{name}}</label>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <listask :id="todo.id" :completed="todo.completed" :task="todo.name"></listask>
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    import listask from '@/components/sidebaritem.vue';
    
    export default {
        name: 'sidebar',
        components: {
            listask
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
                ]
            }
        },
        props: {
            id: {type: Number, default: 1},
            completed: {type: Boolean},
            name: {type: String}
        },
        computed:{
            ...mapGetters('immo', ['getTodo']),
            todo(){
                return this.data()[this.id]
            }
        }
    }
</script>