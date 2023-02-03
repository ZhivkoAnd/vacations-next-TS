"use client";

import VacationPanel from "../components/ui/VacationPanel";
import { FetchBookings } from "../components/utils/FetchQueryClient";

interface Product {
  id: number;
  title: string;
  price: number;
  image?: string;
  qty?: number;
}

const Admin = () => {

  const { data, isLoading } = FetchBookings();
  console.log(data)

    return (
      <div className="container">
      <div className="vacation-panels">
        {data?.map((city: Product ) => {
          return (
            <div key={city.id}>
              <VacationPanel city={city}/>
           </div>
          );
        })}
      </div>
    </div>
    );
  };
  
  export default Admin;
  