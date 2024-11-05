import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { CategoryKey } from "utils/common";
import { CategoryItems } from "./CategoryItems";
import { SearchTool } from "./SearchTool/SearchTool";

export const CategorySearch = () => {
  const [selectedCategory, setSelectedCategory] = useState<null | CategoryKey>(
    null
  );
  const handleCategoryChange = (newCategory: CategoryKey | null) =>
    setSelectedCategory(newCategory);
  return (
    <Flex flexDir={"column"} alignItems={"center"} gap={5}>
      <Text fontSize={"2xl"} textTransform={"uppercase"}>
        {selectedCategory}
      </Text>
      {selectedCategory ? (
        <SearchTool
          category={selectedCategory}
          setSelectedCategory={handleCategoryChange}
        />
      ) : (
        <CategoryItems setSelectedCategory={handleCategoryChange} />
      )}
    </Flex>
  );
};
