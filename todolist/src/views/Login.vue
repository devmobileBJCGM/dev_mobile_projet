<template>
  <div id="connection" >{{ Login }}
    <label>Connection : </label>
    <label for="login"> login : </label>
    <input type="text" name="login" v-model="login">
    <label for="password"> password : </label>
    <input type="text" name="password" v-model="password">
    <button @click.prevent="submit_login()">Connection</button>
  </div>
  <div id="signup">
  </div>
</template>

<script>
export default {
        name: 'Login',
        components: {
        },
        data() {
            return {
                login: '',
                password: '',
                name: '',
                email: ''
            }
        },
        methods: {
            submit_login() {
                if ((this.login != '')&&(this.password != '')) {
                    console.log("connection");
                }
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