import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./views/Index.vue")
    },
    {
      path: "/login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/home",
      component: () => import("./views/Home.vue"),
      children: [
        {
          path: "",
          component: () => import("./views/dashboard/Index.vue")
        },
        {
          path: "product",
          component: () => import("./views/product/Index.vue"),
          children: [
            {
              path: "",
              component: () => import("./views/product/List.vue")
            },
            {
              path: "create",
              component: () => import("./views/product/Create.vue")
            },
            {
              path: "tag",
              component: () => import("./views/product/tag/Index.vue"),
              children: [
                {
                  path: "",
                  component: () => import("./views/product/tag/List.vue")
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});
