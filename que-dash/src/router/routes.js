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
    component: () => import("../components/Dashboard.vue"),
    children: [
      { path: '', component: () => import("../pages/Home.vue")},
      { path: '/tabulator', component: () => import("../pages/Tabulator.vue")}
    ]
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
