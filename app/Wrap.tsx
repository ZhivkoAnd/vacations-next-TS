"use client";

import React from "react";
import Navigation from "./components/ui/Navigation";
import Footer from "./components/ui/Footer";
import { useState } from "react";
import Toast from "./components/ui/Toast";
import { GlobalState } from "./components/utils/GlobalContext";
import { UserAuth } from "./components/utils/AuthContext";

interface Props {
  children: React.ReactNode;
}

const Wrap = ({ children }: Props) => {
  const [colorMode, setColorMode] = useState("dark");
  const { user }: any = UserAuth();
  const { logoutNotification, loginNotification, registerNotification }: any =
    GlobalState();

  const lightMode = () => {
    setColorMode("light");
  };

  const darkMode = () => {
    setColorMode("dark");
  };
  return (
    <div className={`App ${colorMode}`}>
      <Navigation lightMode={lightMode} darkMode={darkMode} />
      <div className="page-content">{children}</div>
      {logoutNotification && (
        <Toast message="You have logged out" toastType="success" />
      )}
      {loginNotification && (
        <Toast
          message={`You have successfully loged in as ${user && user.email}`}
          toastType="success"
        />
      )}
      {registerNotification && (
        <Toast
          message={`You have successfully registered as ${user && user.email}`}
          toastType="success"
        />
      )}
      <Footer />
    </div>
  );
};

export default Wrap;
