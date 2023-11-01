import {createRouter,createWebHistory} from 'vue-router'
import Home from './components/home.vue'
import About from "./components/About.vue";
//import Helloworld from './components/HelloWorld.vue';


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
];
const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router;