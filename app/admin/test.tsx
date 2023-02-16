"use client";

import React, { useState, useEffect } from "react";
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

  const {data, isLoading} = useQuery(["bookingss"], fetchBookingQuery);

  const [filtered, setFiltered] = useState(data)


useEffect(()=>{
  setFiltered(data)
},[data])

  console.log(filtered)

  return (
    <div className="container">
    </div>
  );
};

export default QueryAPI;