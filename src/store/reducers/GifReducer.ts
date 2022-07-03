import { IActionCreator, IGifGroupsList } from "../../interfaces/gifInterfaces";
import addGifActionType from "../actions/actionTypes";

const gifReducer = (
  actualGifGroupsList: IGifGroupsList,
  action: IActionCreator
) => {
  let newGifGroupsList: IGifGroupsList;

  if (action.type === addGifActionType) {
    newGifGroupsList = [...actualGifGroupsList, action.payload];
    return newGifGroupsList;
  }

  newGifGroupsList = [...actualGifGroupsList];
  return newGifGroupsList;
};

export default gifReducer;
