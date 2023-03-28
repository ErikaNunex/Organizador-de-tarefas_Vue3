<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarters">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div v-if="tarefas.length" class="lista">
        <Tarefas v-for="(tarefa, i) in tarefas" :key="i" :tarefa="tarefa" />
      </div>
      <div v-else>
        <h1>Você não realizou nenhuma tarefaz hoje</h1>
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
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefas) {
      this.tarefas.push(tarefa);
    },
  },
});
</script>

<style></style>
