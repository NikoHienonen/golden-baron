import { Grid } from "@chakra-ui/react";
import { CategoryItem } from "./CategoryItem";
import { categories, CategoryKey } from "utils/common";

interface Props {
  setSelectedCategory: (newCategory: CategoryKey) => void;
}

export const CategoryItems = ({ setSelectedCategory }: Props) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={"5"}>
      {categories.map((category) => (
        <CategoryItem
          handleClick={() => setSelectedCategory(category)}
          category={category}
          key={category}
        />
      ))}
    </Grid>
  );
};
