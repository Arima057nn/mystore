import {
  HeaderOnly,
  ProfileLayout,
  DefaultLayout,
  LoginLayout,
  ManagerLayout,
  SearchLayout,
} from "../components/Layouts/";
import Home from "../pages/Home";
import SearchBook from "../pages/SearchBook";
import CategoryBook from "../pages/CategoryBook";
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
import AddBook from "../pages/Admin/BooksManager/AddBook";
import BooksManager from "../pages/Admin/BooksManager";
import AddCategory from "../pages/Admin/CategoriesManager/AddCategory";
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
    path: "/booksearch/:key",
    component: SearchBook,
    layout: SearchLayout,
    sidebar: Categories,
  },

  {
    path: "/bookcategory/:key",
    component: CategoryBook,
    layout: SearchLayout,
    sidebar: Categories,
  },

  {
    path: "/Register",
    component: Register,
    layout: LoginLayout,
  },

  {
    path: "/book/:key",
    component: ProductDetail,
    layout: HeaderOnly,
  },
];

const AdminRoutes = [
  {
    path: "/book/:key",
    component: ProductDetail,
    layout: HeaderOnly,
  },
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
    path: "/booksearch/:key",
    component: SearchBook,
    layout: SearchLayout,
    sidebar: Categories,
  },

  {
    path: "/bookcategory/:key",
    component: CategoryBook,
    layout: SearchLayout,
    sidebar: Categories,
  },
  {
    path: "/admin",
    component: CustomersManager,
    layout: ManagerLayout,
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
    path: `/admin/book/create`,
    component: AddBook,
    layout: ManagerLayout,
    sidebar: Categories,
  },
  {
    path: "/admin/categories",
    component: CategoriesManager,
    layout: ManagerLayout,
    // sidebar: Categories,
  },

  {
    path: `/admin/category/create`,
    component: AddCategory,
    layout: ManagerLayout,
    sidebar: Categories,
  },
  {
    path: "/admin/orders",
    component: OrdersManager,
    layout: ManagerLayout,
    // sidebar: Categories,
  },
];
const UserRoutes = [
  {
    path: "/book/:key",
    component: ProductDetail,
    layout: HeaderOnly,
  },
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
    path: "/booksearch/:key",
    component: SearchBook,
    layout: SearchLayout,
    sidebar: Categories,
  },

  {
    path: "/bookcategory/:key",
    component: CategoryBook,
    layout: SearchLayout,
    sidebar: Categories,
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
];
export { publicRoutes, AdminRoutes, UserRoutes };
