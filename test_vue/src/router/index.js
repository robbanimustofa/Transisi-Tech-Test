import Vue from "vue";
import VueRouter from "vue-router";
// import SplashScreen from "../components/Hajiku/SplashScreen";
// import StartScreen from "../components/Hajiku/StartScreen";
import Login from "../components/Login/Login.vue";
import Register from "../components/Register/Register.vue";
import ListUser from "../components/List User/ListUser.vue";
// import Dashboard from "../components/Hajiku/Dashboard";
// import ListHaji from "../components/Hajiku/Haji/ListHaji";
// import PengertianHaji from "../components/Hajiku/Haji/PengertianHaji";
Vue.use(VueRouter);
const routes = [
  // {
  //     path: '/',
  //     component: SplashScreen
  // },

  // {
  //   path: '/startscren',
  //   component: StartScreen,
  // },

  {
    path: "/loginuser",
    component: Login,
  },

  {
    path: "/register",
    component: Register,
  },

  {
    path: "/listuser",
    component: ListUser,
  },

  // {
  //     path: '/dashboard',
  //     component:Dashboard,
  // },

  // {
  //     path: '/listhaji',
  //     component: ListHaji
  // },

  // {
  //     path: '/pengertianhaji',
  //     component: PengertianHaji,
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
