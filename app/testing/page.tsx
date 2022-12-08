"use client";

import React, { useState } from "react";
import Notification from "../components/ui/Notification";

const Testing = () => {
  const [alert, setAlert] = useState(false);

  return (
    <>
      <div>Testing</div>
      <button onClick={() => setAlert(true)}>Display Alert</button>
      <button onClick={() => setAlert(false)}>Hide Alert</button>
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
