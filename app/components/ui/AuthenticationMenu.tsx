"use client";

import React, { useState } from "react";
import Link from "next/link";

const AuthenticationMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isNotLoggedIn, setNotNotLoggedIn] = useState(true);

  return (
    <>
      {isLoggedIn && <Link href="/login">Login</Link>}
      {isNotLoggedIn && (
        <>
          <h5>Hi Jay !</h5>
          <Link href="/login">Log Out</Link>
        </>
      )}
    </>
  );
};

export default AuthenticationMenu;
