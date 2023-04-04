<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form action="" @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"></label>
        <input
          class="input"
          type="text"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <dvi class="field">
        <button class="button" type="submit">salvar</button>
      </dvi>
    </form>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome Projeto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "ProjetosView",
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      this.store.commit("ADICIONA_PROJETO", this.nomeDoProjeto);
      this.nomeDoProjeto = "";
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>
<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>
