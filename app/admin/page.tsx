"use client";

import React, { useState, useEffect } from "react";
import VacationPanel from "../components/ui/VacationPanel";

const CRUD = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchDataRead = async () => {
      try {
        const response = await fetch(
          "https://vacations-next-ts.vercel.app/api"
        );
        // If the response is NOT 'ok', it throws an error
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const fetchedData = await response.json();
        setCities(fetchedData);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchDataRead();
    setIsLoading(false);
  }, [cities]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ id: 1, title: "xaxa", price: 1, image: "" });
    const data = { id: 1, title: "xaxa", price: 1, image: "" };
    fetch("http://localhost:3000/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
    console.log(cities);
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      <div className="vacation-panels">
        {cities?.map((city) => (
          <div key={city.id}>
            <VacationPanel city={city} />
          </div>
        ))}
      </div>
      <h1>Add new vacation</h1>

      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID</label>
          <input value={id} disabled className="form-control"></input>
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          ></input>
        </div>
        <button type="submit">Add vacation</button>
      </form>
    </div>
  );
};

export default CRUD;
