import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/homeviews.vue"
const routes = [
    {
        path: "/",
         name: "Home", 
         component: HomeView
    },
]
const router = createRouter({                                      
    history: createWebHistory(),
    routes
})
export default router;