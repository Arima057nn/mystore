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
import Order from "../pages/Profile/Order";
import Wishlist from "../pages/Profile/Wishlist";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CustomersManager from "../pages/CustomersManager";
import AddCustomer from "../pages/CustomersManager/AddCustomer";
import UpdateCustomer from "../pages/CustomersManager/UpdateCustomer";
import BooksManager from "../pages/BooksManager";
import CategoriesManager from "../pages/CategoriesManager";
import OrdersManager from "../pages/OrdersManager";
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
    path: `/admin/customer/update`,
    component: UpdateCustomer,
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
  {
    path: "/admin/books/add",
    component: AddBook,
    layout: ManagerLayout,
    sidebar: Categories,
  },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
