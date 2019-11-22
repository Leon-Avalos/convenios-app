<template>
  <div id="proposals">
    <app-navigation></app-navigation>
    <h3>Propuestas de convenios</h3>
    <div class="mt-4 ml-3 mr-3">
      <b-table stripped hover :items="proposals"></b-table>
    </div>
  </div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
export default {
  name: "Proposals",
  components: {
    AppNavigation
  },
  data() {
    return {
        proposals: [
            {name: "Intercambio Moscu", description: "Intercambio para idiomas", entity: "Universidad de Moscú", supervisor: "Pedro Cavas"}

        ]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>