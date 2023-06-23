import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./FooterLayout/FooterLayout";
import HeaderLayout from "./HeaderLayout/HeaderLayout";
import { Spinner } from "@chakra-ui/react";

const MainLayout = () => {
  return (
    <div>
      <HeaderLayout />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default MainLayout;
