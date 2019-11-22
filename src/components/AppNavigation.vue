<template>
  <div class="navigation">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand text-variant="danger" to="/home">Convenios Udem</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/students">Estudiantes</router-link></b-nav-item>
          <b-nav-item><router-link to="/agreements">Convenios</router-link></b-nav-item>
          <b-nav-item><router-link to="/proposals">Propuestas convenios</router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Usuario</em>
            </template>
            <b-dropdown-item @click="logout">Cerrar Sesion</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: "AppNavigation",
  data() {
    return {};
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<style scoped>
</style>