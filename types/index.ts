export type PetType = "Dog" | "Cat" | "Rabbit" | "Bird" | "Hamster" | "Turtle" | "Fish" | "Horse" | "Pig";

export type Gender = "Male" | "Female" | "Either";

export type StyleType =
  | "Classic" | "Cute" | "Funny" | "Elegant" | "Mythological"
  | "Fantasy" | "Nature" | "Food Inspired" | "Strong" | "Royal"
  | "Geek" | "Playful";

export interface NameEntry {
  name: string;
  description: string;
}

export interface Favorite {
  id: string;
  name: string;
  petType: PetType;
  gender: Gender;
  style: StyleType;
  timestamp: number;
}
