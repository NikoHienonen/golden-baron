import { useQuery } from "@tanstack/react-query";
import { Spell, SpellsResponse } from "../types";

const baseUrl = "https://www.dnd5eapi.co/api/spells";

export function useSpells() {
  return useQuery({
    queryKey: ["spells"],
    queryFn: async (): Promise<SpellsResponse> => {
      const response = await fetch(baseUrl);
      return await response.json();
    },
  });
}

export function useSpellByIndex(index: string) {
  return useQuery({
    queryKey: ["spell"],
    queryFn: async (): Promise<Spell> => {
      const response = await fetch(`${baseUrl}/${index}`);
      return await response.json();
    },
  });
}
