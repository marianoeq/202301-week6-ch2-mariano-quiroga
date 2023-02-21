import { CharacterStructure } from "../models/characters.structure";

export interface CharApiRepoStructure {
  loadChars(): Promise<CharacterStructure[]>;
}

export class CharApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:5080/data";
  }

  async loadChars(): Promise<CharacterStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as CharacterStructure[];
    return data;
  }
}
