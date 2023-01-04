import { HeaderOnly, Dev } from "../components/Layouts/";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Upload from "../pages/Upload";
import DevProduct from "../pages/Dev";
import ProductDetail from "../pages/ProductDetail";
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/Cart",
    component: Cart,
    layout: HeaderOnly,
  },
  {
    path: "/Product/book",
    component: ProductDetail,
    layout: HeaderOnly,
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
