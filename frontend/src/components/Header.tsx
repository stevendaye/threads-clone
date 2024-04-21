import { Flex, Image, useColorMode } from "@chakra-ui/react";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justifyContent={"center"} mt={6} mb={12}>
      <Image
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        w={6}
        alt="Logo"
        cursor={"pointer"}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};
