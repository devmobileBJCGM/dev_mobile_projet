<template>
  <div>
    <p v-if="!create">Creer votre compte</p>
    <p v-if="create">Compte déjà créé</p>
  </div>
  <div id="create_account" >
    <label for="name"> name : </label>
    <input type="text" name="name" v-model="name">
    <label for="emailAdresse"> email : </label>
    <input type="text" name="emailAdresse" v-model="emailAdresse">
    <label for="password"> password : </label>
    <input type="text" name="password" v-model="password">
    <button @click.prevent="submit_signup">Submit</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
        name: 'Create_account',
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
            ...mapActions("account",['signup']),
            submit_signup() {
                if ((this.emailAdresse != '')&&(this.password != '')) {
                    this.signup({"name":this.name,"email":this.emailAdresse,"password":this.password});
                }
            }
        },
        computed: {
            ...mapGetters("account",['getAccountToken']),
            create(){
              return this.getAccountToken.length > 0 ? true : false;
            }
        }
    }
</script>
