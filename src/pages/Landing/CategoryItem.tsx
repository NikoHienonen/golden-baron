import { Flex, GridItem, Icon, Text } from "@chakra-ui/react";
import { CategoryKey, getCategoryIcon } from "utils/common";

interface Props {
  category: CategoryKey;
  handleClick: () => void;
}

export const CategoryItem = ({ category, handleClick }: Props) => {
  return (
    <GridItem
      onClick={handleClick}
      bg={"gold.main"}
      textColor={"black.main"}
      py={"10"}
      px="10"
      borderRadius={"2xl"}
      cursor={"pointer"}
      _hover={{ background: "gold.light" }}
      transitionDuration="200ms"
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Icon as={getCategoryIcon(category)} boxSize={"10"} mb={"2"} />
        <Text textTransform="uppercase">{category}</Text>
      </Flex>
    </GridItem>
  );
};
