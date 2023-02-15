"use client";

import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AdminProductList from "../components/ui/AdminProductList";

const QueryAPI = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const queryClient = useQueryClient();

  const fetchBookingQuery = async () => {
    const response = await fetch("http://localhost:3000/api");
    return response.json();
  };

  const fetchBookings = useQuery(["bookings"], fetchBookingQuery);

  const createData = async (data: {}) => {
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const { mutateAsync, isError } = useMutation(createData, {
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

  const removeProduct = async (id: number) => {
    await mutateAsync(id);
  };

  if (fetchBookings.isLoading) {
    return <div>Loading...</div>;
  }

  if (fetchBookings.isError) {
    return <div>There was an error</div>;
  }

  return (
    <div className="container">
      <AdminProductList data={fetchBookings.data} />
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
        <button type="submit" disabled={fetchBookings.isLoading}>
          Add vacation
        </button>
      </form>
    </div>
  );
};

export default QueryAPI;
