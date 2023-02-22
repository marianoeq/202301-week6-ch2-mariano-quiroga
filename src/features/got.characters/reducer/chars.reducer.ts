import { createReducer } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/characters.structure";
import { loadCreator } from "./chars.actions.creator";

const initialState: CharacterStructure[] = [];

export const charsReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadCreator, (_state, { payload }) => payload);
  builder.addDefaultCase((state) => state);
});
