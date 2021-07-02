<template>
  <div class="container card w-1 p-5">
    <h1 class="title is-primary">Giriş Yap</h1>
    <div class="field ">
      <p class="control has-icons-left has-icons-right">
        <label class="label">Mail Adresi</label>
        <input class="input" type="email" placeholder="Email" v-model="email">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <label class="label">Şifre</label>
        <input class="input" type="password" placeholder="Şifre" v-model="password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success m-1 " @click="login">
         <strong> Giriş</strong>
        </button>
        <router-link to="/signup" tag="button" class="button is-primary m-1">Üye Ol</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:5000/login', user)
        .then(res => {
          //if successfull
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            this.$router.push('/');
          }
        }, err => {
          console.log(err.response);
          this.error = err.response.data.error
        })
    }
  }
}
</script>
<style scoped>
.w-1{
  width: 30rem !important;
}
</style>