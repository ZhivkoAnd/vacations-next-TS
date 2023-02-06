"use client";
import { UserAuth } from "../components/utils/AuthContext";
import { GlobalState } from "../components/utils/GlobalContext";

import React, { useState } from "react";
import Notification from "../components/ui/Notification";
import { useRouter } from "next/navigation";

import VacationPanel from "../components/ui/VacationPanel";
import { FetchBookings } from "../components/utils/FetchQueryClient";

interface Product {
  id: number;
  title: string;
  price: number;
  image?: string;
  qty?: number;
}

const Testing = () => {
  const router: any = useRouter();

  const [alert, setAlert] = useState(false);
  const { user, logout }: any = UserAuth();
  const { setLogoutNotification }: any = GlobalState();

  const { data, isLoading } = FetchBookings();

  const handleLogout = async () => {
    try {
      await logout();
      setAlert(true);
      setLogoutNotification(true);
      router.push("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div>Testing</div>
      <button onClick={() => setAlert(true)}>Display Alert</button>
      <button onClick={() => setAlert(false)}>Hide Alert</button>
      <div>Email : {user && user.email}</div>
      <button onClick={handleLogout}>Logout</button>
      {alert && (
        <Notification
          type="success"
          title="hello"
          message="This is a notification"
        />
      )}
      <div className="container">
        <div className="vacation-panels">
          {data?.map((city: Product) => {
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
