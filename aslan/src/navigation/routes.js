import { Credentials, UpsertCredentials } from "../screens/credentials";
import { Products, Product, Overview as ProductOverview, Reports } from "../screens/products";
import Settings from "../screens/settings/loadable";
import Login from "../screens/login";
import ResetPassword from "../screens/resetPassword";
import SignUp from "../screens/signUp";
import { Sandbox, SandboxProduct } from "../screens/sandbox";
import { DashboardAndLogs } from "screens/dashboardAndLogs";
import BulkUpload from "../screens/bulkUpload";
import XToDetails from "../screens/xToDetails/loadable";

export const contentRoutes = [
   {
      path: "/credentials",
      component: Credentials,
   },
   {
      path: "/credentials/:id",
      component: UpsertCredentials,
   },
   {
      path: "/dashboard-logs",
      component: DashboardAndLogs,
   },
   {
      path: "/dashboard-logs/:tabs",
      component: DashboardAndLogs,
   },
   {
      path: "/dashboard-logs/:tabs/:id",
      component: DashboardAndLogs,
   },
   {
      path: "/products",
      component: Products,
   },
   {
      path: "/products/:id",
      component: Product,
   },
   {
      path: "/products/:id/overview",
      component: Product,
   },
   {
      path: "/products/:id/reports",
      component: Product,
   },
   {
      path: "/settings",
      component: Settings,
   },
   {
      path: "/sandbox",
      component: Sandbox,
   },
   {
      path: "/sandbox/:id",
      component: SandboxProduct,
   },
   {
      path: "/sandbox/:id/:offering",
      component: SandboxProduct,
   },
   {
      path: "/bulk-upload",
      component: BulkUpload,
   },
   {
      path: "/deep-sight",
      component: XToDetails,
   },
];

export const authenticationRoutes = [
   {
      path: "/",
      component: Login,
   },
   {
      path: "/login",
      component: Login,
   },
   {
      path: "/forgot-password",
      component: ResetPassword,
   },
   {
      path: "/password/reset/:token",
      component: ResetPassword,
   },
   {
      path: "/reset-password/:token",
      component: ResetPassword,
   },
   {
      path: "/signUp",
      component: SignUp,
   },
];

export const productRoutes = [
   {
      path: "/products/:id/overview",
      Component: ProductOverview,
   },
   {
      path: "/products/:id/reports",
      Component: Reports,
   },
];
