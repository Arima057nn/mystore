import {
  HeaderOnly,
  ProfileLayout,
  DefaultLayout,
  LoginLayout,
  ManagerLayout,
} from "../components/Layouts/";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import Profile from "../pages/Profile";
import EditProfile from "../pages/Profile/EditProfile";
import Order from "../pages/Profile/Order";
import Wishlist from "../pages/Profile/Wishlist";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CustomersManager from "../pages/Admin/CustomersManager";
import AddCustomer from "../pages/Admin/CustomersManager/AddCustomer";
import BooksManager from "../pages/Admin/BooksManager";
import CategoriesManager from "../pages/Admin/CategoriesManager";
import OrdersManager from "../pages/Admin/OrdersManager";
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
    path: "/Profile/order",
    component: Order,
    layout: ProfileLayout,
    sidebar: Account,
  },

  {
    path: "/Profile/wishlist",
    component: Wishlist,
    layout: ProfileLayout,
    sidebar: Account,
  },
  {
    path: "/Product/book",
    component: ProductDetail,
    layout: HeaderOnly,
  },

  {
    path: "/admin/customers",
    component: CustomersManager,
    layout: ManagerLayout,
    // sidebar: Categories,
  },

  {
    path: `/admin/customer/create`,
    component: AddCustomer,
    layout: ManagerLayout,
    sidebar: Categories,
  },
  {
    path: "/admin/books",
    component: BooksManager,
    layout: ManagerLayout,
    // sidebar: Categories,
  },
  {
    path: "/admin/categories",
    component: CategoriesManager,
    layout: ManagerLayout,
    // sidebar: Categories,
  },

  {
    path: "/admin/orders",
    component: OrdersManager,
    layout: ManagerLayout,
    // sidebar: Categories,
  },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
