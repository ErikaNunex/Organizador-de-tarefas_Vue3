<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="" />
    </h1>
    <div class="has-text-centered">
      <i
        @click="alterarTema"
        class="fa-solid fa-3x"
        :class="classToggle"
        style="color: #dbefbe"
      ></i>
    </div>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fa fa-tasks"> tarefas </i>
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fa fa-project-diagram"> projetos </i>
          </router-link>
        </li>
      </ul>
    </nav>
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
<style scoped>
h1 {
  text-align: center;
}
strong {
  color: #f95738;
}
header {
  background: #0a3a40;
  width: 100%;
  height: 100vh;
  padding: 2rem;
}
@media only screen and (max-width: 768px) {
  header {
    height: auto;
  }
}
.panel li {
  margin: 8px 0;
}
.link {
  color: #fff;
}
.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}
</style>
