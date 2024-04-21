import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Interactions } from ".";
import { useState } from "react";

export const UserPost = ({
  likes,
  replies,
  postImg,
  postTitle,
}: {
  likes: number;
  replies: number;
  postImg?: string;
  postTitle: string;
}) => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <Link to={"/markzuck/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        {/* Users images who likes or commented */}
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar src="/zuck-avatar.png" name="Mark Zuck" size={"md"} />
          <Box w={1} h={"full"} bg={"gray.light"} my={2} />
          <Box w={"full"} position={"relative"}>
            <Avatar
              src="https://bit.ly/dan-abramov"
              name="Dan Abramov"
              size={"xs"}
              position={"absolute"}
              top="0"
              left="15px"
              padding={"2px"}
            />
            <Avatar
              src="https://bit.ly/ryan-florence"
              name="Ryan Florence"
              size={"xs"}
              position={"absolute"}
              bottom="0"
              right="-5px"
              padding={"2px"}
            />
            <Avatar
              src="https://bit.ly/kent-c-dodds"
              name="Ken Dodds"
              size={"xs"}
              position={"absolute"}
              bottom="0"
              left="4px"
              padding={"2px"}
            />
          </Box>
        </Flex>

        {/* Post Content. Title & Image */}
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"small"} fontWeight={"bold"}>
                Mark Zuck
              </Text>
              <Image
                src="/verified.png"
                w={4}
                h={4}
                ml={1}
                alt="Verified Media"
              />
            </Flex>

            <Flex alignItems={"center"} gap={4}>
              <Text fontSize={"small"} color={"gray.light"}>
                1d
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>

          <Text fontSize={"sm"}>{postTitle}</Text>
          {postImg && (
            <Box
              borderRadius={6}
              overflow={"hidden"}
              border={"1px solid"}
              borderColor={"gray.light"}
            >
              <Image src={postImg} alt="Post Media" />
            </Box>
          )}

          <Flex gap={3} my={1}>
            <Interactions liked={liked} setLiked={setLiked} />
          </Flex>

          <Flex alignItems={"center"} gap={2}>
            <Text color={"gray.light"} fontSize={"small"}>
              {replies} Replies
            </Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"} />
            <Text color={"gray.light"} fontSize={"small"}>
              {likes} Likes
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};
