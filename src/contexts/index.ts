import { createContext, Dispatch, SetStateAction } from "react";
import { ListType } from "../types";

type GlobalContextType = {
  showBanner: boolean;
  toggleBanner: () => void;
  currentList: ListType;
  setCurrentList: null | Dispatch<SetStateAction<ListType>>;
};

export const GlobalContext = createContext<GlobalContextType>({
  showBanner: true,
  toggleBanner: () => {},
  currentList: {
    title: "Most Popular",
    value: "popular",
  },
  setCurrentList: null,
});
