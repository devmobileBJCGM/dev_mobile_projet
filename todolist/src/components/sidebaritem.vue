<template>
    <p>id: {{ id }}, 
    completed: {{ completed }}, 
    task: {{ task }}</p>
</template>

<script>
 
export default {
        name: 'task',
        
        props:{
           id: {type: Number},
           completed: {type: Boolean},
           task: {type: String}
        }
}   
</script>
