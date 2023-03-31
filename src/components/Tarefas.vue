<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-6">
        {{ tarefa.descricao || "Tarefa sem descrição" }}
      </div>
      <div class="column is-3">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
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
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
});
</script>
<style scoped>
.box {
  background-color: #faf0ca;
}
</style>
