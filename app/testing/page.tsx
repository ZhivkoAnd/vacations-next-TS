"use client";
import { UserAuth } from "../components/utils/AuthContext";
import { GlobalState } from "../components/utils/GlobalContext";

import React, { useState } from "react";
import Notification from "../components/ui/Notification";
import Toast from "../components/ui/Toast"
import {useRouter} from 'next/navigation'

const Testing = () => {

  const router = useRouter()
  
  const [alert, setAlert] = useState(false);
  const { user, logout }: any = UserAuth();
  const { toast, setToast }: any = GlobalState();

console.log(toast)
  const handleLogout = async () => {
    try {
      await logout();
      setAlert(true)
      setToast(true);
     // router.push("")
      console.log(toast)
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div>Testing</div>
      { toast && <Toast message = "You have logged out" toastType="success"/> }
      <button onClick={() => setAlert(true)}>Display Alert</button>
      <button onClick={() => setAlert(false)}>Hide Alert</button>
      <div>Email : {user && user.email}</div>
      <button onClick={handleLogout}>Logout</button>
      {alert && (
        <Notification
          type="success"
          title="hello"
          message="This is a notification"
        />
      )}
    </>
  );
};

export default Testing;
