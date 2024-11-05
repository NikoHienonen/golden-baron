import { Flex } from "@chakra-ui/react";
import { BaronHeading } from "./BaronHeading";
import { CategorySearch } from "./CategorySearch";

export const Landing = () => {
  return (
    <Flex
      h="calc(100vh)"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textColor={"gold.main"}
    >
      <BaronHeading />
      <CategorySearch />
    </Flex>
  );
};
