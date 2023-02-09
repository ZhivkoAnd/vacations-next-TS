"use client";

import React from "react";
import Link from "next/link";
import { UserAuth } from "../utils/AuthContext";
import { useRouter } from "next/navigation";

const AuthenticationMenu = () => {
  const { user, logout }: any = UserAuth();

  const router: any = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
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
