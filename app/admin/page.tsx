"use client";

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
        {data?.map((city: Product) => {
          return (
            <div className="vacation-panel" key={city.title}>
              <img
                src={city.image}
                className="vacation-panel__image"
                alt="city thumbnail"
              />
              <h2 className="vacation-panel__title"> {city.title}</h2>
              <h2 className="vacation-panel__title"> Price: ${city.price}</h2>
              <div className="vacation-panel__shop"> 
              </div>
            </div>
          );
        })}
      </div>
    </div>
    );
  };
  
  export default Admin;
  