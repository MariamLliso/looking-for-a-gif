import { IGifGroup, IActionCreator } from "../../interfaces/gifInterfaces";
import addGifActionType from "./actionTypes";

const addGifGroupToListActionCreator = (
  gifGroup: IGifGroup
): IActionCreator => ({
  type: addGifActionType,
  payload: gifGroup,
});

export default addGifGroupToListActionCreator;
