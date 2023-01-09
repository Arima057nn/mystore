import {
  HeaderOnly,
  Dev,
  ProfileLayout,
  DefaultLayout,
  LoginLayout,
  ManagerLayout,
} from "../components/Layouts/";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Upload from "../pages/Upload";
import DevProduct from "../pages/Dev";
import ProductDetail from "../pages/ProductDetail";
import Profile from "../pages/Profile";
import EditProfile from "../pages/Profile/EditProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CustomersManager from "../pages/CustomersManager";
import AddCustomer from "../pages/CustomersManager/AddCustomer";
import BooksManager from "../pages/BooksManager";
import AddBook from "../pages/CustomersManager/AddCustomer";

import Categories from "../components/Categories";
import Account from "../components/Account";

const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: DefaultLayout,
    sidebar: Categories,
  },
  {
    path: "/Login",
    component: Login,
    layout: LoginLayout,
  },
  {
    path: "/Register",
    component: Register,
    layout: LoginLayout,
  },

  {
    path: "/Cart",
    component: Cart,
    layout: HeaderOnly,
  },
  {
    path: "/Profile",
    component: Profile,
    layout: ProfileLayout,
    sidebar: Account,
  },
  {
    path: "/Profile/edit",
    component: EditProfile,
    layout: ProfileLayout,
    sidebar: Account,
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
  {
    path: "/manager/customers",
    component: CustomersManager,
    layout: ManagerLayout,
    sidebar: Categories,
  },

  {
    path: "/customer/add",
    component: AddCustomer,
    layout: ManagerLayout,
    sidebar: Categories,
  },
  {
    path: "/manager/books",
    component: BooksManager,
    layout: ManagerLayout,
    sidebar: Categories,
  },

  {
    path: "/book/add",
    component: AddBook,
    layout: ManagerLayout,
    sidebar: Categories,
  },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
