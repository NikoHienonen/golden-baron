import { Spinner, UnorderedList, Text, ListItem } from "@chakra-ui/react";
import { useSpells } from "hooks/useSpells";

export const SpellsList = () => {
  const { data, error, isLoading } = useSpells();
  console.log(data);
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    console.error(error);
    return <Text>Error loading cocktails</Text>;
  }
  if (!data?.count) {
    return <Text>No cocktails found!</Text>;
  }
  return (
    <UnorderedList>
      {data.results.map(({ name }) => (
        <ListItem>{name}</ListItem>
      ))}
    </UnorderedList>
  );
};
