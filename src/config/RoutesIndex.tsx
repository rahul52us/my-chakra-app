import { Route, Routes } from "react-router-dom";
import {
  MainPublicRoutes,
  AuthenticateRoutes,
  DashboardRoutes,
} from "./Routes";
import MainLayout from "./layout/MainLayout/MainLayout";
import AuthenticateLayout from "./layout/authenticateLayout/AuthenticateLayout";
import DashboardLayout from "./layout/dashboardLayout/DashboardLayout";

const RouterIndex = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {MainPublicRoutes.map((item, index) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Route>
      <Route element={<AuthenticateLayout />}>
        {AuthenticateRoutes.map((item, index) => {
          return <Route path={item.path} key={index} element={item.element} />;
        })}
      </Route>
      <Route element={<DashboardLayout />}>
        {DashboardRoutes.map((item, index) => {
          return <Route path={item.path} key={index} element={item.element} />;
        })}
      </Route>
    </Routes>
  );
};
export default RouterIndex;
