"use client";

import React, { useState,useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AdminProductList from "../components/ui/AdminProductList";
import ActionBar from "../components/ui/ActionBar";

const QueryAPI = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [inputQuery, setInputQuery] = useState("");

  const queryClient = useQueryClient();

  const fetchBookingQuery = async () => {
    const response = await fetch("http://localhost:3000/api");
    return response.json();
  };

  const fetchBookings = useQuery(["bookings"], fetchBookingQuery, {
    onSuccess(data) {
      setFilters(data.cities);
    },
  });

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

  const [filterss, setFilters] = useState(fetchBookings.data?.cities);

  const newMutation = useMutation(createData, {
    onSuccess: (data) => {
      console.log("Success!", data);
    },
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = { title, price, image };
    await newMutation.mutateAsync(data);
    queryClient.invalidateQueries(["bookings"]);
  };


  const inputData = fetchBookings.data?.cities.filter((city:any) =>
  city.title.toLowerCase().includes(inputQuery.toLowerCase())
);


  const setFilterDateAscending = () => {
    setFilters(
      [...fetchBookings.data.cities].sort((a: any, b: any) => a.price - b.price)
    );
  };

  const setFilterDateDescending = () => {
    setFilters(
      [...fetchBookings.data.cities].sort((a: any, b: any) => b.price - a.price)
    );
  };

  const setFilterTitleAscending = () => {
    setFilters(
      [...fetchBookings.data.cities].sort((a: any, b: any) =>
        a.title.localeCompare(b.title)
      )
    );
  };

  const setFilterTitleDescending = () => {
    setFilters(
      [...fetchBookings.data.cities].sort((a: any, b: any) =>
        b.title.localeCompare(a.title)
      )
    );
  };

  useEffect(()=> {
   setFilters(inputData)
  },[inputQuery, inputData])

  // const removeProduct = async (id: number) => {
  //   await mutateAsync(id);
  // };

  if (fetchBookings.isLoading) {
    return <div>Loading...</div>;
  }

  if (fetchBookings.isError) {
    return <div>There was an error</div>;
  }

  return (
    <div className="container">
      <ActionBar inputQuery={inputQuery} setInputQuery={setInputQuery}/>
      <AdminProductList data={filterss} />
      <h1>Add new vacation</h1>
      <button onClick={setFilterDateAscending}>filter THIS</button>
      <button onClick={setFilterDateDescending}>filter THIS</button>
      <button onClick={setFilterTitleAscending}>filter THIS</button>
      <button onClick={setFilterTitleDescending}>filter THIS</button>

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
        <button type="submit" disabled={newMutation.isLoading}>
          Add vacation
        </button>
      </form>
    </div>
  );
};

export default QueryAPI;
