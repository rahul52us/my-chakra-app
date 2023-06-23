import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout/HeaderLayout";
import { Spinner } from "@chakra-ui/react";
// import SidebarLayout from "./SidebarLayout/SidebarLayout";
import { LargeScreenHeaderHeight } from "../../constant/variable";

const DashboardLayout = () => {
  return (
    <div>
      <HeaderLayout />
      {/* <SidebarLayout /> */}
      <Suspense fallback={<Spinner />}>
        <div style={{ marginTop: LargeScreenHeaderHeight }}>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
