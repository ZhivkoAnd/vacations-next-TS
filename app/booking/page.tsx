"use client";

import { useState } from "react";

const Booking = () => {
  const [cartItems, setCartItems] = useState([]);

  interface Product {
    id: number;
    city: string;
    price: number;
    qty?: number;
  }

  const vacations = [
    {
      id: 1,
      city: "copenhagen",
      price: 230,
    },
    {
      id: 2,
      city: "Sofia",
      price: 100,
    },
    {
      id: 3,
      city: "Bucharest",
      price: 50,
    },
  ];

  const add = (product: Product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    console.log("jej");
  };

  const remove = (product: any) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    console.log("jej");
  };

  console.log(cartItems);

  return (
    <div className="container">
      {vacations.map((city) => {
        return (
          <div key={city.city}>
            <div>{city.city}</div>
            <div>{city.price}</div>
            <button onClick={() => add(city)}>+</button>
            <button onClick={() => remove(city)}>-</button>
          </div>
        );
      })}
      <div>Basket</div>
      <div>
        {!cartItems.length ? (
          <div>Empty</div>
        ) : (
          <div>
            {cartItems.map((e) => {
              return (
                <div key={e.id}>
                  {e.city}...
                  {e.price}...
                  {e.qty}...
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
