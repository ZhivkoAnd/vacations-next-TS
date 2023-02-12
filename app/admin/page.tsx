"use client";

import React, { useState, useEffect } from "react";
import VacationPanel from "../components/ui/VacationPanel";

const CRUD = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api");
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
    fetchData();
    setIsLoading(false);
  }, [cities]);

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
    </div>
  );
};

export default CRUD;
