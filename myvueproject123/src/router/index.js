/* eslint-disable semi */
/* eslint-disable quotes */
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import UpdateDoc from "@/components/UpdateDoc";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/homePage",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/UpdateDoc",
      name: "HelloWorld-aboutUs",
      component: UpdateDoc
    }
  ]
});
