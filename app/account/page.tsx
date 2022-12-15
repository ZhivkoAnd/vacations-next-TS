"use client";
import { UserAuth } from "../components/utils/AuthContext";

import React, { useState } from "react";
import Notification from "../components/ui/Notification";

const Testing = () => {
  
  const [alert, setAlert] = useState(false);
  const { user, logout }: any = UserAuth();

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
      <div>Testing</div>
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
