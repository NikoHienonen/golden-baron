import { Flex, Heading, Text } from "@chakra-ui/react";

export const BaronHeading = () => {
  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mb={"12"}
    >
      <Heading fontSize={"6xl"}>The Golden Baron</Heading>
      <Text fontSize={"xl"}>Your all-in-one DnD tool</Text>
    </Flex>
  );
};
