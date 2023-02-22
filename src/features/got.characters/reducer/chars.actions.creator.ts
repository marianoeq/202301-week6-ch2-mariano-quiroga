import { createAction } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/characters.structure";
import { CharsActions } from "./chars.actions.types";

export const loadCreator = createAction<CharacterStructure[]>(
  CharsActions.load
);
