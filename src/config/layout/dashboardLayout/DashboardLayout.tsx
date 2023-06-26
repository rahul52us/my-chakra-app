import { useEffect } from "react";
import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderLayout from "./HeaderLayout/HeaderLayout";
import { contentLargeBodyPadding, contentSmallBodyPadding, headerHeight, sidebarWidth } from "../../constant/variable";
import Loader from "../../component/Loader/Loader";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";
import styled from "styled-components";
import SidebarLayout from "./SidebarLayout/SidebarLayout";
import { useMediaQuery, useTheme } from "@chakra-ui/react";

const DashboardLayout = observer(() => {
  const {
    auth: { restoreUser },
    layout: { fullScreenMode },
  } = store;
  const navigate = useNavigate();

  const theme = useTheme();
  const [sizeStatus] = useMediaQuery(`(max-width: ${theme.breakpoints.xl})`);

  useEffect(() => {
    if (!restoreUser()) {
      navigate("/login");
    }
  }, [restoreUser, navigate]);

  return (
    <MainContainer>
      <SidebarContainer fullScreenMode={fullScreenMode} className={fullScreenMode ? 'fullscreen' : ''}>
        <SidebarLayout />
      </SidebarContainer>
      <Container fullScreenMode={fullScreenMode}>
        <HeaderContainer className={fullScreenMode ? 'fullscreen' : ''} sizeStatus={sizeStatus} fullScreenMode={fullScreenMode}>
          <HeaderLayout />
        </HeaderContainer>
        <ContentContainer className={fullScreenMode ? 'fullscreen' : ''} fullScreenMode={fullScreenMode} sizeStatus={sizeStatus}>
          <Suspense fallback={ <Loader />}>
              <Outlet />
          </Suspense>
        </ContentContainer>
      </Container>
    </MainContainer>
  );
});

export default DashboardLayout;

const MainContainer = styled.div`
display: flex;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &.fullscreen {
    margin-left: -${sidebarWidth};
  }
`;
const SidebarContainer = styled.div<{ fullScreenMode: boolean }>`
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: ${sidebarWidth};
  display: inline;
  border-right: "1px solid red";
  background-color:blue;
  &.fullscreen {
    width: 0;
    transition: width 0.3s ease-in-out;
  }
`;

const Container = styled.div<{fullScreenMode : boolean}>`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  &.fullscreen {
    margin-left: 0;
  }
`;

const HeaderContainer = styled.div<{fullScreenMode : boolean,sizeStatus:boolean}>`
  height: ${headerHeight};
  border-bottom:'1px solid black'
  position: fixed;
  right: 0;
  left: ${(props) => (props.fullScreenMode || props.sizeStatus ? 0 : sidebarWidth)};
  transition: all 0.3s ease-in-out;

  &.fullscreen {
    left: 0;
    width: 100%;
    transition: left 0.3s ease-in-out;
  }
`;

const ContentContainer = styled.div<{sizeStatus : boolean , fullScreenMode : boolean}>`
  padding: ${({ sizeStatus }) => (sizeStatus ? contentSmallBodyPadding : contentLargeBodyPadding)};
  /* margin-top: ${headerHeight}; */
  width: ${({ sizeStatus, fullScreenMode }) =>
    sizeStatus ? `100vw` : fullScreenMode ? '100vw' : `calc(100vw - ${sidebarWidth})`};
  overflow-x: hidden;
  height: calc(100vh - ${headerHeight});
  transition: all 0.3s ease-in-out;
  &.fullscreen {
    width: 100vw;
    transition: width 0.3s ease-in-out;
  }
`;
