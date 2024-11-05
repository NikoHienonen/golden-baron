import { Flex, Icon, Text } from "@chakra-ui/react";
import { CategoryKey } from "utils/common";
import { SearchSpells } from "./SearchComponents/SearchSpells";
import { IoClose } from "react-icons/io5";

interface Props {
  category: CategoryKey;
  setSelectedCategory: (newCategory: CategoryKey | null) => void;
}

export const SearchTool = ({ category, setSelectedCategory }: Props) => {
  const getSearchComponentByCategory = () => {
    switch (category) {
      case "spells":
        return <SearchSpells />;
    }
  };
  return (
    <Flex
      flexDir="column"
      gap={5}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"} w="full">
        <Text>Browse {category}</Text>
        <button onClick={() => setSelectedCategory(null)}>
          <Icon as={IoClose} boxSize={8} />
        </button>
      </Flex>
      {getSearchComponentByCategory()}
    </Flex>
  );
};
