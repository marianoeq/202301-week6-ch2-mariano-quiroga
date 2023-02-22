import { useMemo } from "react";
import { useCharacters } from "../../hooks/use.characters";
import { CharApiRepo } from "../../services/char.api.repo";

export const CharactersPage = () => {
  const repo = useMemo(() => new CharApiRepo(), []);
  const { characters } = useCharacters(repo);
  return (
    <>
      <h1>GOT CHARACTERS</h1>
      <ul>
        {characters.map((character) => (
          <div key={character.category}>
            <li>{character.name}</li>
            <li>{character.family}</li>
            <li>{character.category}</li>
            <li>{character.age}</li>
          </div>
        ))}
      </ul>
    </>
  );
};
