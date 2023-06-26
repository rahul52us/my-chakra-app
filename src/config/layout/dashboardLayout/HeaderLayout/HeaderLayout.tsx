import { Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { useMediaQuery } from "@chakra-ui/react";
import HeaderNavbar from "./component/HeaderNavbar/HeaderNavbar";
import HeaderLogo from "./component/Logo/HeaderLogo";
import { headerHeight, headerPadding } from "../../../constant/variable";

const HeaderLayout = () => {
  const [isLargerThan1020] = useMediaQuery("(min-width: 1020px)");
  return (
    <HeaderingContainer
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      height={headerHeight}
      padding={headerPadding}
    >
      <Text width={isLargerThan1020 ? "60%" : "90%"}>
        <HeaderLogo />
      </Text>
      <HeaderNavbar />
    </HeaderingContainer>
  );
};

export default HeaderLayout;

const HeaderingContainer = styled(Flex)`
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
