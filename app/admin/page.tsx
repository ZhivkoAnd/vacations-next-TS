"use client";

import React, { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AdminProductList from "../components/ui/AdminProductList";
import ActionBar from "../components/ui/ActionBar";
import {
  filterPriceAscending,
  filterPriceDescending,
  filterTitleAscending,
  filterTitleDescending,
} from "../components/utils/FilterFunctions";
import { ThreeDots } from "react-loader-spinner";

const QueryAPI = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [inputQuery, setInputQuery] = useState("");

  const queryClient = useQueryClient();

  const fetchBookingQuery = async () => {
    // We receive the response from the server
    const response = await fetch("http://localhost:4000/cities");
    return response.json();
  };

  const { data, isLoading, isError } = useQuery(
    ["bookings"],
    fetchBookingQuery,
    {
      onSuccess(data) {
        setFilters(data);
      },
    }
  );

  const createData = async (data: {}) => {
    const response = await fetch("http://localhost:4000/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const deleteData = async (id: number) => {
    const response = await fetch(`http://localhost:4000/cities/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error();
    }
    return true;
  };

  const { mutateAsync: deleteMutate } = useMutation(deleteData, {
    onSuccess: (data) => {
      console.log("Success!", data);
    },
  });

  const remove = async (id: number) => {
    await deleteMutate(id);
    queryClient.invalidateQueries(["bookings"]);
  };

  const [filterss, setFilters] = useState(data);

  const { mutateAsync: createMutate } = useMutation(createData, {
    onSuccess: (data) => {
      console.log("Success!", data);
    },
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await createMutate({ title, price, image });
    queryClient.invalidateQueries(["bookings"]);
  };

  const inputData = data?.filter((city: any) =>
    city.title.toLowerCase().includes(inputQuery.toLowerCase())
  );

  const setFilterPriceAscending = () => {
    if (inputData && inputData.length) {
      setFilters(filterPriceAscending(inputData));
    }
  };

  const setFilterPriceDescending = () => {
    if (inputData && inputData.length) {
      setFilters(filterPriceDescending(inputData));
    }
  };

  const setFilterTitleAscending = () => {
    if (inputData && inputData.length) {
      setFilters(filterTitleAscending(inputData));
    }
  };

  const setFilterTitleDescending = () => {
    if (inputData && inputData.length) {
      setFilters(filterTitleDescending(inputData));
    }
  };

  useEffect(() => {
    if (inputData && inputData.length) {
      setFilters(inputData);
    } else {
      setFilters([]);
    }
  }, [inputQuery]);

  // const removeProduct = async (id: number) => {
  //   await mutateAsync(id);
  // };

  if (isLoading) {
    return (
      <ThreeDots
        height="30"
        color="#ccc"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    );
  }

  if (isError) {
    return <div>There was an error</div>;
  }

  return (
    <div className="container">
      <ActionBar
        inputQuery={inputQuery}
        setInputQuery={setInputQuery}
        setFilterPriceAscending={setFilterPriceAscending}
        setFilterPriceDescending={setFilterPriceDescending}
        setFilterTitleAscending={setFilterTitleAscending}
        setFilterTitleDescending={setFilterTitleDescending}
        isAdminPage
      />
      <AdminProductList data={filterss} remove={remove} />
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
