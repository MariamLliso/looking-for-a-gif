import { Dispatch } from "react";

export type IInputText = string;

export type IGifGroup = string[];

export type IGifGroupsList = IGifGroup[];

export interface IActionCreator {
  type: string;
  payload: IGifGroup;
}

export interface IGifContext {
  gifGroupsList: IGifGroupsList;
  gifGroupsListDispatch: Dispatch<IActionCreator>;
}
