<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-5"
        role="form"
        aria-label="Formulário para ciraçãode uma nova tarefa"
      >
        <input
          v-model="descricao"
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>
      <div class="select">
        <select v-model="idProjeto">
          <option value="">Selecionar o projeto</option>
          <option
            v-for="projeto in projetos"
            :value="projeto.id"
            :key="projeto.id"
          >
            {{ projeto.nome }}
          </option>
        </select>
      </div>
      <div class="column">
        <Temporizador @ao-temporizador-finalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "@/store/index";

import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "FormularioIniciar",
  emits: ["aoSalvarTarefa"],
  components: {
    Temporizador,
  },
  data() {
    return {
      descricao: "",
      idProjeto: "",
    };
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      const dadosAtividade = {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
        projeto: this.projetos.find((p) => p.id == this.idProjeto),
      };
      this.$emit("aoSalvarTarefa", dadosAtividade);
      this.descricao = "";
    },
  },
  setup() {
    const store = useStore(key);
    return {
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>
<style scoped>
.button {
  margin-left: 8px;
}
.box {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>
