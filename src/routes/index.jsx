import Home from "~/pages/Home";
import NotFound from "~/pages/NotFound";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/hi88-mb/", component: Home },
  { path: "*", component: NotFound },
  { path: "/hi88-mb/*", component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
