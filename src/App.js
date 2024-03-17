import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes, routes1 } from "./routes";
import Default from "./components/DefaultCpn/Default";
import DefaultAD from "./components/DefaultCpn/DefaultAD";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? Default : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {routes1.map((route1) => {
            const Page = route1.page;
            const Layout = route1.isShowHeader ? DefaultAD : Fragment;
            return (
              <Route
                key={route1.path}
                path={route1.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {/* <Route path="/*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
