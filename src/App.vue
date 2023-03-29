<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuro }"
  >
    <div class="column is-one-fifth">
      <BarraLateral @aoAlterarTema="trocarTema" />
    </div>
    <div class="column is-four-fifths conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div v-if="tarefas.length" class="lista">
        <Tarefas v-for="(tarefa, i) in tarefas" :key="i" :tarefa="tarefa"  @ao-deletar="excluirTarefa"/>
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
      API_URL: 'http://localhost:3000',
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefas) {
     this.addNovaTarefa(tarefa)
    },
    trocarTema(modoEscuro: boolean) {
      this.modoEscuro = modoEscuro;
    },
    addNovaTarefa(tarefa: ITarefas){
      fetch(this.API_URL + '/tarefas', {
       method: 'POST',
       body:JSON.stringify(tarefa),
       headers: {
        'Content-Type': 'application/json'
       }
    })
    .then(response => response.json())
    .then(response => this.atualizarTarefasLista())
    },
    atualizarTarefasLista(){
      fetch(this.API_URL + '/tarefas')
        .then(response => response.json())
        .then((listaTarefa)=>this.tarefas = listaTarefa)
    },
   async excluirTarefa(id: number){
      await fetch(this.API_URL+'/tarefas/'+id,{
         method:'DELETE'
     });
     this.atualizarTarefasLista()
    }
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
.defaultTarefa {
  display: flex;
}
</style>
