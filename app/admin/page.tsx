"use client";

import { FetchBookings } from "../components/utils/FetchQueryClient";

const Admin = () => {

  const { data, isLoading } = FetchBookings();
  console.log(data)

    return (
      <>
      Hello
      </>
    );
  };
  
  export default Admin;
  