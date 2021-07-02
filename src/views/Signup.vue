<template>
<div class="container card w-1 p-5">
    <div class="field">
    <label class="label">Adı Soyadı</label>
    <div class="control">
        <input class="input" type="text" placeholder="Adı Soyadı" v-model="name">
    </div>
   </div>
    <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Mail Adresi" v-model="email">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
            </span>
        </div>
    </div>
    <div class="field">
        <label class="label">Şifre</label>
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Şifre" v-model="password" >
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
    </div>
    <div class="field is-grouped">
    <div class="control">
        <button class="button is-link m-1" @click="signup">Gönder</button>
        <router-link to="/login" tag="a" class="is-primary m-5 p-5">Zaten üyeliğim var</router-link>
    </div>
</div>
{{error}}
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Signup',
    data() {
        return{
            name: '',
            email: '',
            password: '',

            error: '',
        }
    },
    methods: {
        signup(){
            let newUser = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            axios.post('http://localhost:5000/signup', newUser)
            .then(res => {
                console.log(res)
                this.error = ''
                this.$router.push('/login'); 
                }, err => {
                console.log(err.response)
                this.error = err.response.data.error
                })
        }
    }
}
</script>

<style>
.w-1{
  width: 30rem !important;
}
</style>