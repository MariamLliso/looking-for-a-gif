import { createContext } from "react";
import { IGifContext } from "../../interfaces/gifInterfaces";

const GifDataContext = createContext<IGifContext | null>(null);
GifDataContext.displayName = "GifDataContext";

export default GifDataContext;
