/**
 * This file contains all the routes for the app
 *  - To add any new route, we've to define it here.
 */

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../components/Tabulator.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
