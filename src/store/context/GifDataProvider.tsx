import { useReducer } from "react";
import { IGifGroupsList } from "../../interfaces/gifInterfaces";
import gifReducer from "../reducers/GifReducer";
import GifDataContext from "./GifDataContext";

interface IProps {
  children: JSX.Element;
}

const GifDataProvider = ({ children }: IProps) => {
  const initialGifGroupsList: IGifGroupsList = [];
  const [gifGroupsList, gifGroupsListDispatch] = useReducer(
    gifReducer,
    initialGifGroupsList
  );

  return (
    <GifDataContext.Provider value={{ gifGroupsList, gifGroupsListDispatch }}>
      {children}
    </GifDataContext.Provider>
  );
};

export default GifDataProvider;
