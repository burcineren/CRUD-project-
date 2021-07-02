<template>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/"  class="navbar-item" href="https://bulma.io">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" width="30" height="28">
        </router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/blog" class="navbar-item">
          <strong> BlogPost App</strong>
          </router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <!-- <router-link to="/create" class="button is-link">
                <strong>Create</strong>
              </router-link> -->
              <router-link to="/login" class="button is-primary">
                <strong>Giriş</strong>
              </router-link>
              <a @click.prevent="logout" class="button is-link" href="#">Çıkış Yap</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
  export default {
    methods: {
      logout() {
      }
    },
    computed: {
      logoutClass() {
        return {
          'd-none': false
        }
      }
    }
  }
</script>

<style>

</style>