import { lazy } from "react";
import { authentication } from "./constant/routes";

// public Routes
const Home = lazy(() => import("../pages/main/Home/Home"));
const About = lazy(() => import("../pages/main/About/About"));
const Pricing = lazy(() => import("../pages/main/pricing/Pricing"));
const Testimonial = lazy(() => import("../pages/main/Testimonial/Testimonial"));
const Contact = lazy(() => import("../pages/main/Contact/Contact"));

// authentication Routes
const Login = lazy(() => import("../pages/Authentication/Login/Login"));
const Register = lazy(
  () => import("../pages/Authentication/Register/Register")
);
const ForgotPassword = lazy(
  () => import("../pages/Authentication/ForgotPassword/ForgotPassword")
);
const ResetPassword = lazy(() => import('../pages/Authentication/ResetPassword/ResetPassword'))
// dashboard Routes

const DashboardIndex = lazy(() => import("../pages/Dashboard/DashboardIndex"));

export const MainPublicRoutes = [
  {
    element: <Home />,
    path: "/",
    publicRoute: true,
  },
  {
    element: <About />,
    path: "/about",
    publicRoute: true,
  },
  {
    element: <Pricing />,
    path: "/pricing",
    publicRoute: true,
  },
  {
    element: <Testimonial />,
    path: "/testimonial",
    publicRoute: true,
  },
  {
    element: <Contact />,
    path: "/contact",
    publicRoute: true,
  },
];

export const AuthenticateRoutes = [
  {
    element: <Login />,
    path: authentication.login,
    publicRoutes: true,
  },
  {
    element: <Register />,
    path: authentication.register,
    publicRoutes: true,
  },
  {
    element: <ForgotPassword />,
    path: authentication.forgotPassword,
    publicRoutes: true,
  },
  {
    element : <ResetPassword />,
    path:authentication.resetPassword,
    publicRoutes:true
  }
];

export const DashboardRoutes = [
  {
    element: <DashboardIndex />,
    path: "/dashboard",
    privateRoutes: true,
  },
];
