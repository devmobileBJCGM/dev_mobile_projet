<template>
  <div id="create_account" >
    <label>Create an account : </label>
    <label for="name"> name : </label>
    <input type="text" name="name" v-model="name">
    <label for="emailAdresse"> email : </label>
    <input type="text" name="emailAdresse" v-model="emailAdresse">
    <label for="password"> password : </label>
    <input type="text" name="password" v-model="password">
    <button @click.prevent="signup">Submit</button>
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
        },
        computed: {
            ...mapGetters("account",['accounts'])
        }
    }
</script>
