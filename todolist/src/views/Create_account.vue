<template>
  <div id="create_account" >
    <label>Create an account : </label>
    <label for="name"> name : </label>
    <input type="text" name="name" v-model="name">
    <label for="login"> login : </label>
    <input type="text" name="login" v-model="login">
    <label for="password"> password : </label>
    <input type="text" name="password" v-model="password">
    <button @click.prevent="submit_create_account()">Submit</button>
  </div>
</template>

<script>
export default {
        name: 'Create_account',
        components: {
        },
        data() {
            return {
                login: '',
                password: '',
                name: '',
            }
        },
        methods: {
            submit_create_account() {
                
            }
        },
        computed: {
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