import React, { useState, createContext, useContext } from "react";

const GlobalContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const GlobalContextProvider = ({ children }: Props) => {
  const [logoutNotification,setLogoutNotification] = useState(false)
  const [toast2,setToast2] = useState(false)
  const [toast3,setToast3] = useState(false)

  return (
    // Then we pass the current user that we get from firebase to the components
    <GlobalContext.Provider value={{ logoutNotification, setLogoutNotification, toast2, setToast2,toast3, setToast3 }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalState = () => {
  return useContext(GlobalContext);
};
