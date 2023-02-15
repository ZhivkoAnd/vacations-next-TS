"use client";

import React, { useState } from "react";
import VacationPanel from "../components/ui/VacationPanel";
import { FetchBookings } from "../components/utils/FetchQueryClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createData } from "../components/utils/FetchQueryClient";
import AdminProductList from "../components/ui/AdminProductList";

const QueryAPI = () => {
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const { data, isLoading } = FetchBookings();
  const queryClient = useQueryClient();


  const { mutateAsync } = useMutation(createData, {
    onSuccess: (data) => {
      console.log("Success!", data);
    },
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = { title, price, image };
    await mutateAsync(data);
    queryClient.invalidateQueries(["bookings"]);
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="container">
     <AdminProductList data={data}/>
      <h1>Add new vacation</h1>

      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="form-control"
          ></input>
        </div>
        <button type="submit">Add vacation</button>
      </form>
    </div>
  );
};

export default QueryAPI;
