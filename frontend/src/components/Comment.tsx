import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Interactions } from ".";
import { useState } from "react";

export const Comment = ({
  comment,
  createdAt,
  likes,
  username,
  userAvatar,
}: {
  comment: string;
  createdAt: string;
  likes: number;
  username: string;
  userAvatar: string;
}) => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src={userAvatar} size={"sm"} name="Mark Zuck" />
        <Flex direction={"column"} w={"full"} gap={1}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={"small"} fontWeight={"bold"}>
              {username}
            </Text>
            <Flex alignItems={"center"} gap={2}>
              <Text fontSize={"small"} color={"gray.light"}>
                {createdAt}
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>

          <Text>{comment}</Text>
          <Interactions liked={liked} setLiked={setLiked} />
          <Text fontSize={"small"} color={"gray.light"}>
            {likes + (liked ? 1 : 0)} Likes
          </Text>
        </Flex>
      </Flex>

      <Divider />
    </>
  );
};
