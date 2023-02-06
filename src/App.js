import { Fragment, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Redirect,
  Switch,
} from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layouts";

const roles = {
  admin: "admin",
  user: "user",
};

function App() {
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    // simulate getting user role from API
    setTimeout(() => {
      setUserRole(roles.admin);
    }, 1000);
  }, []);
  if (!userRole) {
    return <p>Loading...</p>;
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            // nếu nó k đc đường dẫn nào thì nó sẽ mặc định là Fragment
            // nếu layout là null thì dùng Fragment, ngược lại thì lấy DefaultLayout
            // const Layout = route.layout === null ? Fragment : DefaultLayout;
            let Layout = DefaultLayout;
            let Sidebar;
            if (route.layout === Layout) {
              Sidebar = route.sidebar;
            }
            if (route.layout) {
              Layout = route.layout;
              Sidebar = route.sidebar;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout children={<Sidebar />} content={<Page />}>
                    {/* // thành phần tĩnh children */}
                    {/* <Page /> */}
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
