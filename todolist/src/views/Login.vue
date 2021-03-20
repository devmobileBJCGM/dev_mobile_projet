<template>
  <div>
    <p v-if="!connected">Pas encore connecté</p>
    <p v-if="connected">Déjà connecté</p>
  </div>
  <div id="connection" >
    <label for="emailAdresse"> email : </label>
    <input type="text" name="emailAdresse" v-model="emailAdresse">
    <label for="password"> password : </label>
    <input type="text" name="password" v-model="password">
    <button @click.prevent="submit_login">Connexion</button>
  </div>
  <div v-if="connected">
    <button @click.prevent="submit_logout">Deconnexion</button>
  </div>
  <div id="signup">
    <router-link to="/Create_account">Create an account</router-link>
  </div>
  tatatiti@tatatiti.com
  tatatatatitititi
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
            ...mapActions("account",['login','logout']),
            submit_login() {
                if ((this.emailAdresse != '')&&(this.password != '')) {
                    this.login({"email":this.emailAdresse,"password":this.password});
                    this.emailAdresse = '';
                    this.password = '';
                }
            },
            submit_logout(){
                this.logout();
            }
        },
        computed: {
            ...mapGetters("account",['getAccountToken']),
            connected(){
              return this.getAccountToken.length > 0 ? true : false;
            }
        }
    }
</script>
