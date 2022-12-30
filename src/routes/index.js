import { HeaderOnly, Dev } from "../components/Layouts/";
import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import DevProduct from "../pages/Dev";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/following",
    component: Following,
  },

  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly,
  },

  {
    path: "/dev",
    component: DevProduct,
    layout: Dev,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
