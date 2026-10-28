import Login from "screens/login/loadable";
import Home from "screens/home/loadable";

export const routeCollectionMap = {
   DEFAULT: "/",
   HOME: "/home",
   LOGIN: "/login",
};

export const publicRoutes = [
   {
      path: routeCollectionMap.DEFAULT,
      component: Login,
   },
   {
      path: routeCollectionMap.LOGIN,
      component: Login,
   },
];

export const privateRoutes = [
   {
      path: routeCollectionMap.DEFAULT,
      component: Home,
   },
   {
      path: routeCollectionMap.HOME,
      component: Home,
   },
];
