<template>
  <div id="connection" >
    <label>Connection : </label>
    <label for="emailAdresse"> email : </label>
    <input type="text" name="emailAdresse" v-model="emailAdresse">
    <label for="password"> password : </label>
    <input type="text" name="password" v-model="password">
    <button @click.prevent="submit_login">Connection</button>
  </div>
  <div id="signup">
    <router-link to="/Create_account">Create an account</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
    
export default {
        name: 'Login',
        components: {
        },
        data() {
            return {
                emailAdresse: '',
                password: '',
                name: '',
            }
        },
        methods: {
            ...mapActions("account",['login']),
            submit_login() {
              console.log("submit");
                if ((this.emailAdresse != '')&&(this.password != '')) {
                    console.log("connection");
                    this.login({"email":this.emailAdresse,"password":this.password})
                }
            }
        },
        computed: {
            ...mapGetters("account",['accounts'])
        }
    }
</script>
