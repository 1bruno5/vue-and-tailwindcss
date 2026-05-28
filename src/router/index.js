import {createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Services from "../views/Services.vue"
import Contact from "../views/Contact.vue"
import Videos from "../views/Videos.vue"
import Photos from "../views/Photos.vue"
const routes = [
    {
        path: "/",
         name: "Home", 
         component: Home
    },
        {
        path: "/about",
         name: "About", 
         component: About
    },
            {
        path: "/services",
         name: "services", 
         component: Services
    },
                {
        path: "/contact",
         name: "contact", 
         component: Contact
    },
    {
        path: "/photos",
         name: "Photos", 
         component: Photos
    },
    {
        path: "/videos",
         name: "videos", 
         component: Videos
    },
]
const router = createRouter({                                      
    history: createWebHistory(),
    routes
})
export default router;