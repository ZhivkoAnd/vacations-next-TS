import React, { useState, createContext, useContext } from "react";

const GlobalContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const GlobalContextProvider = ({ children }: Props) => {
  const [toast,setToast] = useState(false)

  return (
    // Then we pass the current user that we get from firebase to the components
    <GlobalContext.Provider value={{ toast, setToast }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalState = () => {
  return useContext(GlobalContext);
};
