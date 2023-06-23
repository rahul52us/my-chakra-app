import { Flex, useMediaQuery } from "@chakra-ui/react";
import HeaderNavMenu from "./element/HeaderNavMenu";
import { FaBars } from 'react-icons/fa';


const HeaderNavbar = () => {
  const [isLargerThan1020] = useMediaQuery("(min-width: 1020px)");

  return (
    <Flex
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      width={isLargerThan1020 ? "40%" : "10%"}
    >
      {isLargerThan1020 ? (
        <>
          <HeaderNavMenu />
          <HeaderNavMenu />
          <HeaderNavMenu />
          <HeaderNavMenu />
        </>
      ) : (
        <FaBars cursor="pointer"/>
      )}
    </Flex>
  );
};

export default HeaderNavbar;
