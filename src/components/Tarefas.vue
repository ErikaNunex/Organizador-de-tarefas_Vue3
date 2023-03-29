<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-6">
        {{ tarefa.descricao || "Tarefa sem descrição" }}
      </div>
      <div class="column is-3">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
      <div class="column is-3">
        <button @click="excluirTarefa" class="delete is-large"></button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Cronometro from "./Cronometro.vue";
import { defineComponent, PropType } from "vue";
import ITarefa from "@/interfaces/ITarefas";
export default defineComponent({
  name: "ListaTarefas",
  components: {
    Cronometro,
  },
  emits:['aoDeletar'],
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
  data(){
    return{
      API_URL: 'http://localhost:3000',
    }
  },
  methods:{
    excluirTarefa(){
      this.$emit('aoDeletar', this.tarefa.id)
    }
  }
});
</script>
<style scoped>
.box {
  background-color: #faf0ca;
}
</style>
