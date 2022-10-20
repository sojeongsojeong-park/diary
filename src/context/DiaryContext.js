import { createContext, useState } from "react";

const DiaryContext = createContext();

const DiaryContextProvider = ({ children }) => {
  const [openState, setOpenState] = useState({
    isOpen: false,
    date: "",
    data: null
  });
  const updateOpenState = (bool, date, data) => {
    setOpenState({ isOpen: bool, date: date, data:data });
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
