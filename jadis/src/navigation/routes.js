import Home from "screens/home/loadable";
import Login from "screens/login/loadable";
import Application from "screens/application/loadable";
import Applications from "screens/applications/loadable";
import ForgotPassword from "screens/forgotPassword/loadable";
import ResetPassword from "screens/resetPassword/loadable";
import CreateApplication from "screens/createApplication/loadable";

export const routeCollectionMap = {
   DEFAULT: "/",
   HOME: "/home",
   LOGIN: "/login",
   APPLICATION: "/application/:id",
   FORGOT_PASSWORD: "/forgot-password",
   RESET_PASSWORD: "/reset-password",
   APPLICATIONS: "/applications/:status?",
   CREATE_APPLICATION: "/create-application",
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
   {
      path: routeCollectionMap.FORGOT_PASSWORD,
      component: ForgotPassword,
   },
   {
      path: routeCollectionMap.RESET_PASSWORD,
      component: ResetPassword,
   },
];

export const privateRoutes = [
   {
      path: routeCollectionMap.DEFAULT,
      component: Applications,
   },
   {
      path: routeCollectionMap.HOME,
      component: Home,
   },
   {
      path: routeCollectionMap.APPLICATION,
      component: Application,
   },
   {
      path: routeCollectionMap.APPLICATIONS,
      component: Applications,
   },
   {
      path: routeCollectionMap.CREATE_APPLICATION,
      component: CreateApplication,
   },
];
