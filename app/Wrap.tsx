"use client";

import React from "react";
import Navigation from "./components/ui/Navigation";
import Footer from "./components/ui/Footer";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Wrap = ({ children }: Props) => {
  const [colorMode, setColorMode] = useState("dark");

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
      <Footer />
    </div>
  );
};

export default Wrap;
