"use client";

import React, { useState } from "react";
import Link from "next/link";
import { userAuth } from "../utils/AuthContext";

const AuthenticationMenu = () => {


  const { user, logout }: any = userAuth();

  const handleLogout = async () => {
    try {
      await logout();
      location.href = "/";
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      {!user && <Link href="/login">Login</Link>}
      {user && (
        <>
          <h5>Hi {user.email}</h5>
          <Link href="/login" onClick={handleLogout}>
            Log Out
          </Link>
        </>
      )}
    </>
  );
};

export default AuthenticationMenu;
