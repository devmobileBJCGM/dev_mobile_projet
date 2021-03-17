<template>
    <div id="sidebar">
        <label id="sidebar-title" >{{name}}</label>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    
    export default {
        name: 'sidebar',
        components: {
        },
        data() {
            return {
                showText:true,
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
        },
        methods:{
        }
    }
</script>

<style>
label{width: 200px; height:30px;}
label:hover{ color: red; background-color: red;}
</style>