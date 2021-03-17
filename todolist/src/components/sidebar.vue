<template>
    <div id="sidebar">
        <label id="sidebar-title" >{{name}}</label>
    </div>
</template>
<script>
    
    export default {
        name: 'sidebar',
        components: {
        },
        props: {
            id: {type: Number, default: 1},
            completed: {type: Boolean},
            name: {type: String}
        },
    }
</script>
