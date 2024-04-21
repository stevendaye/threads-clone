import {
  Avatar,
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { useShowToast } from "../hooks";

export const UserHeader = () => {
  const showToast = useShowToast();

  const handleCopyURL = () => {
    const userURL = window.location.href;
    navigator.clipboard.writeText(userURL).then(() => {
      showToast("Success", "Profile Link Copied Successfully", "success");
    });
  };

  return (
    <VStack alignItems={"start"} gap={4}>
      {/* User's image, username & name */}
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Marck Zuck
          </Text>
          <Flex alignItems={"center"} gap={2}>
            <Text fontSize={"sm"}> markzuck </Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              markzuck.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
            name="Mark Zuck"
            src="/zuck-avatar.png"
            size={{ base: "md", md: "xl" }}
            border={"2px solid whitesmoke"}
          />
        </Box>
      </Flex>

      {/* User's personal details */}
      <Text>Co-founder, Executive Chairman, CEO of Meta</Text>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Text color={"gray.light"}> 5.5 Followers </Text>
          <Box w={1} h={1} bg={"gray.light"} borderRadius={"full"} />
          <Link color={"gray.light"}>instagram.com</Link>
        </Flex>

        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList background={"gray.dark"}>
                  <MenuItem background={"gray.dark"} onClick={handleCopyURL}>
                    Copy Link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      {/* Tabs */}
      <Flex w={"full"}>
        <Flex
          flex={1}
          borderBottom={"1.5px solid white"}
          justifyContent={"center"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}>Threads</Text>
        </Flex>

        <Flex
          flex={1}
          borderBottom={"2px solid gray"}
          justifyContent={"center"}
          color={"gray.light"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};
