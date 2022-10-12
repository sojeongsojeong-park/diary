import { createContext, useState } from "react";

const DiaryContext = createContext();

const DiaryContextProvider = ({ children }) => {
  const [openState, setOpenState] = useState({
    isOpen: false,
    date: "",
  });
  const updateOpenState = (bool, date) => {
    setOpenState({ isOpen: bool, date: date });
  };

  const contextValue = {
    openState: openState,
    updateOpenHandler: updateOpenState,
  };
  return (
    <DiaryContext.Provider value={contextValue}>
      {children}
    </DiaryContext.Provider>
  );
};

export { DiaryContext, DiaryContextProvider };
