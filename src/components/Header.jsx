import { Flex, Heading, Spacer, useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="header" width="100%" padding="4" bg={colorMode === "light" ? "gray.100" : "gray.900"} alignItems="center">
      <Heading as="h1" size="lg">
        Todo App
      </Heading>
      <Spacer />
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Header;