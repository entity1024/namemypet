import { PetType, Gender, StyleType, NameEntry } from "@/types";
import { randomItem } from "@/utils/random";
import { getNames } from "@/data/names";

export function generateName(
  petType: PetType,
  gender: Gender,
  style: StyleType
): NameEntry {
  const names = getNames(petType, gender, style);
  return randomItem(names);
}
