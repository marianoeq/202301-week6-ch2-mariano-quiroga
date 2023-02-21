import { CharacterStructure } from "../models/characters.structure";

type MockData = { data: CharacterStructure[] };

export const getCharacters = async (): Promise<MockData> => ({
  data: [
    {
      category: "king",
      name: "joffrey",
      family: "Baratheon",
      age: 60,
      kingdomYears: 40,
      isAlive: true,
      message: "blablabla",
    },
    {
      category: "squire",
      name: "Jaime",
      family: "Lannister",
      age: 50,
      submission: 34,
      isAlive: true,
      message: "blablabla",
      master: "fighter",
    },
    {
      category: "fighter",
      name: "Daenerys",
      family: "Targaryen",
      age: 60,
      weapon: "knive",
      skill: 9,
      isAlive: true,
      message: "blablabla",
    },
    {
      category: "counselor",
      name: "Tyrion",
      family: "Lannister",
      age: 60,
      chief: "king",
      isAlive: true,
      message: "blablabla",
    },
  ],
});
