<template>
  <div id="agreements">
    <app-navigation></app-navigation>
    <h3>Convenios</h3>
    <div class="mb-3">
      <b-button pill v-b-modal.modal-prevent-closing>Crear convenio</b-button>
    </div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Crear Convenio"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="saveAgreement">
        <b-form-group
          :state="nameState"
        >
          <b-form-input placeholder="Nombre"
          id="name-input"
          v-model="name"
          :state="nameState" required></b-form-input>
        </b-form-group>
        <b-form-group
          :state="nameState"
        >
        <b-form-input 
          placeholder="Descripción"
          id="name-input" v-model="description" :state="nameState" required></b-form-input>
        </b-form-group>

        <b-form-group
          :state="nameState"
        >
        <b-form-input 
          placeholder="Entidad"
          id="name-input" v-model="entity" :state="nameState" required></b-form-input>
        </b-form-group>
        <b-form-group
          :state="nameState"
        >
        <b-form-input 
          placeholder="Encargado"
          id="name-input" v-model="supervisor" :state="nameState" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    <div class="mt-2 ml-3 mr-3">
      <b-table id="agreements" stripped hover :items="agreements"></b-table>
    </div>
  </div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
export default {
  name: "Agreements",
  components: {
    AppNavigation
  },
  data() {
    return {
        name: '',
        description: '',
        entity: '',
        supervisor: '',
        agreements:[
            { name: "Investigacion materiales",description: "Busqueda de materiales nuevos",entity: "Universidad Monterrey",supervisor: "Juan Loyola"}
        ],
        show: true
    };
  },
  methods: {
      saveAgreement: function() {
          this.agreements.push({name:this.name, description:this.description, entity:this.entity, supervisor:this.supervisor})
          this.$root.$emit('bv::refresh::table', 'agreements')

      }
  }
};
</script>

<style scoped>
</style>