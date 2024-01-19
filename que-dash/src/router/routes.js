/**
 * This file contains all the routes for the app
 *  - To add any new route, we've to define it here.
 */

import MainLayout from "../layouts/MainLayout.vue"
import Dashboard from "../components/Dashboard.vue";

import Profile from "../pages/Profile.vue";
import Settings from "../pages/Settings.vue";
import Triggers from "../pages/Triggers.vue";
import Modal from "../pages/Modal.vue";
import Error from "../pages/ErrorNotFound.vue";
import Tabulator from "../pages/Tabulator.vue";
import Home from "../pages/Home.vue";



const routes = [
  {
    path: "/",
    component: () => MainLayout,
  },
  {
    path: "/dashboard",
    component: () => Dashboard,
    children: [
      { path: '', component: () => Home},
      { path: '/tabulator', component: () => Tabulator},
      { path: '/profile', component: () => Profile},
      { path: '/modal', component: () => Modal},
      { path: '/triggers', component: () => Triggers},
      { path: '/404', component: () => Error},
      { path: '/settings', component: () => Settings}
    ] 
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
