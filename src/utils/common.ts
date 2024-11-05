import { GiFireSpellCast } from "react-icons/gi";
import { GiSpikedDragonHead } from "react-icons/gi";
import { GiPrivateFirstClass } from "react-icons/gi";
import { GiBackPain } from "react-icons/gi";
import { GiBackup } from "react-icons/gi";
import { GiBindle } from "react-icons/gi";

export const categories = [
  "spells",
  "monsters",
  "conditions",
  "equipment",
  "classes",
  "races",
] as const;

export type CategoryKey = (typeof categories)[number];

export function getCategoryIcon(category: CategoryKey) {
  switch (category) {
    case "spells":
      return GiFireSpellCast;
    case "monsters":
      return GiSpikedDragonHead;
    case "conditions":
      return GiBackPain;
    case "classes":
      return GiPrivateFirstClass;
    case "races":
      return GiBackup;
    case "equipment":
      return GiBindle;
  }
}
