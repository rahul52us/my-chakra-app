import React from "react";
import {
  Flex,
  IconButton,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import HeaderNavMenu from "./element/HeaderNavMenu";
import { FaBars } from "react-icons/fa";
import { observer } from "mobx-react-lite";
import { BiSun, BiMoon } from "react-icons/bi";

const HeaderNavbar = observer(() => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDarkMode, setIsDarkMode] = React.useState(colorMode === "dark");
  const [isLargerThan1020] = useMediaQuery("(min-width: 1020px)");

  const toggleMode = () => {
    toggleColorMode();
    setIsDarkMode(!isDarkMode);
  };
  return (
    <Flex
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      width={isLargerThan1020 ? "35%" : "10%"}
    >
      {isLargerThan1020 ? (
        <>
          <HeaderNavMenu />
          <IconButton
            icon={isDarkMode ? <BiSun /> : <BiMoon />}
            onClick={toggleMode}
            variant="ghost"
            size="lg"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          />
          <HeaderNavMenu />
          <HeaderNavMenu />
        </>
      ) : (
        <FaBars cursor="pointer" />
      )}
    </Flex>
  );
});

export default HeaderNavbar;
