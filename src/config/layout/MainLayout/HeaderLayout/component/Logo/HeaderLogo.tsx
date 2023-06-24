import { Box, Switch, useColorMode } from "@chakra-ui/react";

const HeaderLogo = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={4}>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="brand"
        size="md"
        aria-label="Toggle light/dark mode"
      >
        {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
      </Switch>
    </Box>
  );
};

export default HeaderLogo;
