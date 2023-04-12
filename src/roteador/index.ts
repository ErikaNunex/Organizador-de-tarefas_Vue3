import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import tarefas from '../view/tarefas.vue';
import projetos from '../view/projetos.vue';
import formulario from '../view/projetos/Formulario.vue';
import lista from '../view/projetos/ListaProjeto.vue'
const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tarefas',
        component: tarefas
    },
    {
        path:'/projetos',
        component:projetos,
        children:[
            {
                path: '',
                name: 'projetos',
                component: lista
            },
            {
                path: 'novo',
                name: 'Novo Projetos',
                component: formulario
            },
            {
                path: ':id',
                name: ' Editar projeto',
                component: formulario,
                props:true
            }
        ]
    }
]

const roteador = createRouter({
    history: createWebHashHistory(), 
    routes: rotas
})

export default roteador;