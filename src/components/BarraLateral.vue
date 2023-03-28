<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="" />
    </h1>
    <button @click="alterarTema" class="button">{{ textoBotao }}</button>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ["aoAlterarTema"],
  data() {
    return {
      modoEscuro: false,
    };
  },
  computed: {
    textoBotao() {
      return this.modoEscuro ? "Desativar modo escuro" : "ativar modo escuro";
    },
  },
  methods: {
    alterarTema() {
      this.modoEscuro = !this.modoEscuro;
      this.$emit("aoAlterarTema", this.modoEscuro);
    },
  },
});
</script>
<style>
header {
  padding: 1rem;
  background-color: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
