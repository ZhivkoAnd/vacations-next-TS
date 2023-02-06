"use client";

import React, { useState } from "react";

const Testing = () => {
  const [task, setTask] = useState("");

  const addTask = () => {};

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
    addTask();
    setTask("");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {/* <input type="text" id="task" className="input" onInput={(e) => setTask(e.target.value)} required autoFocus maxLength={60} placeholder="Enter text"/> */}
        {/* <label htmlFor="task" className="label">Enter Task</label> */}
        <button className="btn" aria-label="Add task" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Testing;
