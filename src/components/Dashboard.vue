<template>
  <div>
    <app-navigation></app-navigation>
    <div id="message">
      <b-jumbotron bg-variant="danger" text-variant="white" border-variant="dark">
        <template v-slot:header>Gestión de Convenios</template>

        <template v-slot:lead>Divisón de relaciones internacionales - Universidad de Medellin</template>
        <hr class="my-4" />
        <p text-variant="dark" class="h-50">
          La internacionalización en la Universidad de Medellin se enmarca en la proyección cultural y promoción de otras lenguas asi como en el establecimiento y desarrollo de convenios
          de cooperación, proyección e investigación internacional.
        </p>
      </b-jumbotron>
    </div>
    <div id="options" class="mt-5 ml-4 mr-4">
      <b-card-group deck>
        <b-card bg-variant="info" text-variant="white" header="Estudiantes" class="text-center">
          <b-card-text>Gestiona y los estudiantes que se registran en la plataforma para buscar información sobre convenios, aplicar a convenios o proponer nuevos.</b-card-text>
          <b-button to="/students" text-variant="dark" header-bg-variant="white">Ver</b-button>
        </b-card>

        <b-card bg-variant="dark" text-variant="white" header="Convenios" class="text-center">
          <b-card-text>Gestiona los convenios vigentes y propuestos por docentes, estudiantes o externos.</b-card-text>
          <b-button to="/agreements" header-bg-variant="white">Ver</b-button>
        </b-card>

        <b-card bg-variant="success" text-variant="white" header="Propuestas" class="text-center">
          <b-card-text>Accede al panel para gestionar y visualizar los convenios propuestos, sus estados y añadir respuestas.</b-card-text>
          <b-button to="/proposals" header-bg-variant="white">Ver</b-button>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import AppNavigation from "@/components/AppNavigation.vue";
export default {
  name: "Dashboard",
  components: {
    AppNavigation
  },
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
    },
    loadEstudents: function(student) {
      console.log("Estudiante: " + student);
    }
  },
  created: function() {
    const db = firebase.database();
    db.ref("Usuarios/Estudiantes").on("value", snapshot =>
      this.loadEstudents(snapshot.val())
    );
  }
};
</script>
<style scoped>
</style>