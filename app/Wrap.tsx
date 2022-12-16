"use client";

import React from "react";
import Navigation from "./components/ui/Navigation";
import Footer from "./components/ui/Footer";
import { useState } from "react";
import Toast from "./components/ui/Toast"
import { GlobalState } from "./components/utils/GlobalContext";

interface Props {
  children: React.ReactNode;
}

const Wrap = ({ children }: Props) => {
  const [colorMode, setColorMode] = useState("dark");
const { toast, setToast }: any = GlobalState();


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
      { toast && <Toast message = "You have logged out" toastType="success"/> }
      <Footer />
    </div>
  );
};

export default Wrap;
