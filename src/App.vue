<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuro }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoAlterarTema="trocarTema" />
    </div>
    <div class="column is-three-quarters conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div v-if="tarefas.length" class="lista">
        <Tarefas v-for="(tarefa, i) in tarefas" :key="i" :tarefa="tarefa" />
      </div>
      <div v-else class="defaultTarefa">
        <!-- <i class="fa-solid fa-file-circle-plus fa-10x"></i> -->
        <span>Você ainda não tem nenhuma tarefa</span>
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
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
.defaultTarefa {
  display: flex;
}
</style>
