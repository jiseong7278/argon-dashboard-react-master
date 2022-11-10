/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Third from "./views/Third";
import Template from "./views/Template";
import UserView from "./views/userView";
import Reservation from "./views/examples/Reservation";
import DormitoryEdit from "./views/examples/DormitoryEdit";
import Login from "./views/examples/Login";
import Terms from "./views/examples/Terms";
import Notice from "./views/examples/Notice";

let routes = [
  /*{
  testing:[
    {
      path: "/index",
      name: "Dashboard",
      icon: "ni ni-tv-2 text-primary",
      component: Index,
      layout: "/admin"
    },
    {
      path: "/icons",
      name: "Icons",
      icon: "ni ni-planet text-blue",
      component: Icons,
      layout: "/admin"
    },
    {
      path: "/maps",
      name: "Maps",
      icon: "ni ni-pin-3 text-orange",
      component: Maps,
      layout: "/admin"
    },
    {
      path: "/user-profile",
      name: "User Profile",
      icon: "ni ni-single-02 text-yellow",
      component: Profile,
      layout: "/admin"
    },

    {
      path: "/tables",
      name: "Tables",
      icon: "ni ni-bullet-list-67 text-red",
      component: Tables,
      layout: "/admin"
    },
    {
      path: "/login",
      name: "Login",
      icon: "ni ni-key-25 text-info",
      component: Login,
      layout: "/auth"
    },
    {
      path: "/register",
      name: "Register",
      icon: "ni ni-circle-08 text-pink",
      component: Register,
      layout: "/auth"
    },
    {
      path: "/userView",
      name: "UserView",
      icon: "ni ni-key-25 text-info",
      component: userView,
      layout: "/admin"
    },
    {
      path: "/Student",
      name: "Student",
      icon: "ni ni-user-run",
      component: Third,
      layout: "/admin"
    },
    {
      path: "/Template",
      name: "Template",
      icon: "ni ni-user-run",
      component: Template,
      layout: "/admin"
    },
    {
      path: "/reservation",
      name: "Reservation",
      icon: "ni ni-bullet-list-67 text-blue",
      component: Reservation,
      layout: "/admin"
    },
  ]
}*/
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/userView",
    name: "UserView",
    icon: "ni ni-key-25 text-info",
    component: UserView,
    layout: "/admin"
  },
  {
    path: "/Student",
    name: "Student",
    icon: "ni ni-user-run",
    component: Third,
    layout: "/admin"
  },
  {
    path: "/Template",
    name: "Template",
    icon: "ni ni-user-run",
    component: Template,
    layout: "/admin"
  },
  {
    path: "/reservation/:facility_num",
    name: "Reservation",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Reservation,
    layout: "/admin"
  },
    //login page path
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/dormitoryEdit",
    name: "DormitoryEdit",
    icon: "ni ni-bullet-list-67 text-blue",
    component: DormitoryEdit,
    layout: "/admin"
  },
  {
    path: "/terms",
    name: "Terms",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Terms,
    layout: "/admin"
  },
  {
    path: "/notice",
    name: "Notice",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Notice,
    layout: "/admin"
    }
];
export default routes;
