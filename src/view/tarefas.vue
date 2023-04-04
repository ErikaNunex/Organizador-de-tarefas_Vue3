<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div v-if="tarefas.length" class="lista">
    <Tarefas v-for="(tarefa, i) in tarefas" :key="i" :tarefa="tarefa" />
  </div>
  <div v-else class="column">
    <div class="column is-half is-offset-one-quarter mt-6">
      <img class="img" src="../assets/default.svg" />
    </div>
    <div class="column is-half is-offset-one-quarter">
      <span class="texto-default">Organize suas atividades do dia-dia</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Formulario from "../components/Formulario.vue";
import Tarefas from "../components/Tarefas.vue";
import ITarefas from "../interfaces/ITarefas";

export default defineComponent({
  name: "TarefasView",
  components: {
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
  },
});
</script>
<style>
.lista {
  padding: 1.25rem;
  margin-top: 90px;
}
.img {
  width: 500px;
}
.texto-default {
  color: var(--texto-primario);
}
</style>
