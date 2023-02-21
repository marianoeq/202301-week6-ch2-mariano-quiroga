export type CharacterStructure = {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  message: string;
  category: Category;
  kingdomYears?: number; // For King
  weapon?: string; // For Fighter
  skill?: number; // For Fighter
  chief?: Category; // For Counselor
  submission?: number; // For Squire
  master?: Category; // ForSquire
};

type Category = "king" | "squire" | "fighter" | "counselor";
