<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuro }"
  >
    <div class="column is-one-fifth">
      <BarraLateral @aoAlterarTema="trocarTema" />
    </div>
    <div class="column is-four-fifths conteudo">
      <Notificacoes />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "@/components/BarraLateral.vue";
import ITarefas from "./interfaces/ITarefas";
import Notificacoes from "@/components/Notificacoes.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Notificacoes,
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
  --bg-primario: #012030;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
.img {
  width: 500px;
}
.texto-default {
  color: var(--texto-primario);
}
</style>
