import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout/HeaderLayout";
// import SidebarLayout from "./SidebarLayout/SidebarLayout";
import { LargeScreenHeaderHeight } from "../../constant/variable";
import Loader from "../../component/Loader/Loader";

const DashboardLayout = () => {
  return (
    <div>
      <HeaderLayout />
      {/* <SidebarLayout /> */}
      <Suspense fallback={<Loader />}>
        <div style={{ marginTop: LargeScreenHeaderHeight }}>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
