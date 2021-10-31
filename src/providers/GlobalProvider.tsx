import { FC, useState } from "react";
import { GlobalContext } from "../contexts";
import { ListType } from "../types";

const GlobalProvider: FC = ({ children }) => {
  const [showBanner, setShowBanner] = useState(true);
  const [currentList, setCurrentList] = useState<ListType>({
    title: "Most Popular",
    value: "popular",
  });

  const toggleBanner = () => {
    setShowBanner(!showBanner);
  };

  return (
    <GlobalContext.Provider
      value={{ showBanner, toggleBanner, currentList, setCurrentList }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
