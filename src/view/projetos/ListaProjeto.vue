<template>
  <section>
    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome Projeto</th>
          <th>Açoẽs</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <router-link :to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button
              @click="excluirProjeto(projeto.id)"
              class="button ml-2 is-danger"
            >
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import { EXCLUIR_PROJETO } from "@/store/Mutations";
import useNotificador from "@/hooks/notificador";
import { TipoNotificacao } from "@/interfaces/INotificacao";

export default defineComponent({
  name: "ListaView",
  methods: {
    excluirProjeto(id: string) {
      this.store.commit(EXCLUIR_PROJETO, id);
      this.notificar(
        TipoNotificacao.FALHA,
        "Projeto excluido",
        "Um projeto foi removido da listagem de projetos"
      );
    },
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador();
    return {
      projetos: computed(() => store.state.projetos),
      store,
      notificar,
    };
  },
});
</script>
