import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Comment, Interactions } from "../components";

const PostPage = () => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <>
      <Flex>
        <Flex alignItems={"center"} gap={3} w={"full"}>
          <Avatar src="/zuck-avatar.png" name="Mark Zuck" size={"md"} />
          <Flex>
            <Text fontSize="sm" fontWeight="bold">
              markzuck
            </Text>
            <Image src="/verified.png" w={4} h={4} ml={4} />
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"small"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Let's build Threads</Text>

      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src="/post2.jpg" alt="Post Media" />
      </Box>

      <Flex gap={3} my={3}>
        <Interactions liked={liked} setLiked={() => setLiked(!liked)} />
      </Flex>

      <Flex alignItems={"center"} gap={2}>
        <Text fontSize={"small"} color={"gray.light"}>
          459 Replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"} />
        <Text color={"gray.light"} fontSize={"small"}>
          {200 + (liked ? 1 : 0)} Likes
        </Text>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex alignItems={"center"} gap={2}>
          <Text fontSize={"2xl"}>👋 </Text>
          <Text color={"gray.light"}>Get the app to like, reply & post</Text>
        </Flex>
        <Button>Get The App</Button>
      </Flex>

      <Divider my={4} />

      {/* Comments */}
      <Comment
        comment="At last, to my taste"
        createdAt="2d"
        likes={245}
        username="codebeast"
        userAvatar="https://bit.ly/code-beast"
      />
      <Comment
        comment="Long time we haven't seen this"
        createdAt="1d"
        likes={543}
        username="danabramov"
        userAvatar="https://bit.ly/dan-abramov"
      />
      <Comment
        comment="The master has done it once again"
        createdAt="3d"
        likes={78}
        username="ryanflorence"
        userAvatar="https://bit.ly/ryan-florence"
      />
      <Comment
        comment="I am no longer going to be skeptical"
        createdAt="4d"
        likes={21}
        username="sage-adebayo"
        userAvatar="https://bit.ly/sage-adebayo"
      />
    </>
  );
};

export default PostPage;
