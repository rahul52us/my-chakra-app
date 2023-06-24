import { lazy } from "react";

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
    path: "/login",
    publicRoutes: true,
  },
  {
    element: <Register />,
    path: "/register",
    publicRoutes: true,
  },
  {
    element: <ForgotPassword />,
    path: "/forgot-password",
    publicRoutes: true,
  },
];

export const DashboardRoutes = [
  {
    element: <DashboardIndex />,
    path: "/dashboard",
    privateRoutes: true,
  },
];
