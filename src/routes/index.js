import { createRouter, createWebHistory } from 'vue-router';
import Hello from '../views/HelloWorld.vue'
import HomeMain from '../views/HomeMain.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeMain },
        { path: '/hello', component: Hello },
    ]
})
export default router;