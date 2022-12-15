"use client";
import { UserAuth } from "../components/utils/AuthContext";

import React, { useState } from "react";
import Notification from "../components/ui/Notification";
import Toast from "../components/ui/Toast"

const Testing = () => {
  
  const [alert, setAlert] = useState(false);
  const { user, logout }: any = UserAuth();
  const [toast,setToast] = useState(false)

  const handleLogout = async () => {
    try {
      await logout();
      setAlert(true)
      setToast(true);
    //  location.href = "/";
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div>Testing</div>
      { toast && <Toast/> }
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
