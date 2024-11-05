import { Flex, Input, UnorderedList, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import { SpellResult } from "types";

interface Props {
  data: SpellResult[];
  handleSpellClick: (newSpell: string) => void;
}

export const SearchList = ({ data, handleSpellClick }: Props) => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const handleInputChange = (event) => setSearchValue(event.target.value);
  const filteredData = searchValue
    ? data.filter(({ name }) =>
        name
          .toLocaleLowerCase()
          .includes(String(searchValue).toLocaleLowerCase())
      )
    : data;
  return (
    <Flex flexDir={"column"} gap={5} w={"100%"}>
      <Input placeholder="Search for a spell..." onChange={handleInputChange} />
      <UnorderedList spacing={3} overflow={"scroll"} height={"calc(50vh)"}>
        {filteredData.map((result) => (
          <ListItem
            cursor={"pointer"}
            key={result.index}
            onClick={() => handleSpellClick(result.index)}
          >
            {result.name}
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};
