import { Box, Spinner, Text } from "@chakra-ui/react";
import { useSpells } from "hooks/useSpells";
import { SearchList } from "../SearchList";
import { SpellDrawer } from "../Drawers/SpellDrawer";
import { useRef, useState } from "react";

export const SearchSpells = () => {
  const { data, error, isLoading } = useSpells();
  const [selectedSpell, setSelectedSpell] = useState<string | null>(null);
  const btnRef = useRef(null);
  const handleSpellClick = (newSpell: string) => setSelectedSpell(newSpell);
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>Error loading spells!</Text>;
  }
  if (!data?.count) {
    return <Text>No spells found!</Text>;
  }

  return (
    <Box ref={btnRef}>
      <SearchList data={data.results} handleSpellClick={handleSpellClick} />
      {selectedSpell && (
        <SpellDrawer
          ref={btnRef}
          index={selectedSpell}
          handleClose={() => setSelectedSpell(null)}
        />
      )}
    </Box>
  );
};
