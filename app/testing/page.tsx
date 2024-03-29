"use client";
import { UserAuth } from "../components/utils/AuthContext";
import React from "react";
import { useRouter } from "next/navigation";
import VacationPanel from "../components/ui/VacationPanel";
import { FetchBookings } from "../components/utils/FetchQueryClient";
import { BookingProps } from "../types";

const Testing = () => {
  const router = useRouter();

  const { user, logout }: any = UserAuth();

  const { data, isLoading } = FetchBookings();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div>Testing</div>
      <div>Email : {user && user.email}</div>
      <button onClick={handleLogout}>Logout</button>
      <div className="container">
        <div className="vacation-panels">
          {data?.cities.map((city: BookingProps) => {
            return (
              <div key={city.id}>
                <VacationPanel city={city} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testing;
