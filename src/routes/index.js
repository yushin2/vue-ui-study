import { createRouter, createWebHistory } from 'vue-router';
import Hello from '../views/HelloWorld.vue'
// import HomeMain from '../views/HomeMain.vue'
import MainList from '../views/MainList.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainList },
        { path: '/hello', component: Hello },
    ]
})
export default router;