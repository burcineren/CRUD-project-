import { createRouter, createWebHistory } from "vue-router";
import Blog from "../views/Blog.vue";
import Signup from "../views/Signup.vue";
import Auth from "../views/Auth.vue"
import Landing from '../views/Landing';

const routes = [
  { 
    path: '/', 
    name: "Landing",
    component: Landing 
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
    {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
