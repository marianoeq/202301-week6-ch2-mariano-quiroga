import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { loadCreator } from "../reducer/chars.actions.creator";
import { CharApiRepo } from "../services/char.api.repo";

export const useCharacters = (repo: CharApiRepo) => {
  const characters = useSelector((state: RootState) => state.characters);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const loadChars = async () => {
      try {
        const data = await repo.loadChars();
        dispatch(loadCreator(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    loadChars();
  }, [dispatch, repo]);
  return { characters };
};
