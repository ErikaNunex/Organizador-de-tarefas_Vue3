<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="" />
    </h1>
    <i
      @click="alterarTema"
      class="fa-solid fa-3x"
      :class="classToggle"
      style="color: #dbefbe"
    ></i>
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
    classToggle() {
      return this.modoEscuro ? "fa-toggle-on" : "fa-toggle-off";
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
  background-color: #0a3a40;
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
