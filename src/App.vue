<template>
  <main class="columns is-multiline" :class="{ 'modo-escuro': modoEscuro }">
    <div class="column is-one-fifth barra">
      <BarraLateral @aoAlterarTema="trocarTema" />
    </div>
    <div class="column is-four-fifths form">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
    </div>
    <div class="column is-four-fifths conteudo">
      <div v-if="tarefas.length" class="lista">
        <Tarefas v-for="(tarefa, i) in tarefas" :key="i" :tarefa="tarefa" />
      </div>
      <div v-else class="column">
        <div class="column is-half is-offset-one-quarter mt-6">
          <img class="img" src="./assets/default.svg" alt="" />
        </div>
        <div class="column is-half is-offset-one-quarter">
          <span class="texto-default">Organize suas atividades do dia-dia</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "@/components/BarraLateral.vue";
import Formulario from "./components/Formulario.vue";
import Tarefas from "./components/Tarefas.vue";
import ITarefas from "./interfaces/ITarefas";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Formulario,
    Tarefas,
  },
  data() {
    return {
      tarefas: [] as ITarefas[],
      modoEscuro: false,
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefas) {
      this.tarefas.push(tarefa);
    },
    trocarTema(modoEscuro: boolean) {
      this.modoEscuro = modoEscuro;
    },
  },
});
</script>
<style>
.lista {
  padding: 1.25rem;
  margin-top: 90px;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #012030;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
  margin-left: 368px;
}
.barra {
  position: fixed;
}
.form {
  position: fixed;
  margin-left: 378px;
  z-index: 99;
}
.img {
  width: 500px;
}
.texto-default {
  color: var(--texto-primario);
}
</style>
