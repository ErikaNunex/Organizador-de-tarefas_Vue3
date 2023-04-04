import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import tarefas from '../view/tarefas.vue';
import projetos from '../view/projetos.vue'
const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tarefas',
        component: tarefas
    },
    {
        path: '/projetos',
        name: 'projetos',
        component: projetos
    }
]

const roteador = createRouter({
    history: createWebHashHistory(), 
    routes: rotas
})

export default roteador;